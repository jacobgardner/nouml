import { BaseType } from 'd3-selection';
import { ICON_SIZE, NODE_SIZE } from './config';
import uniqid from 'uniqid';
import { wrap } from './utils';
import copy from './icons/copy-to-clipboard.svg';
import { HierarchyNode } from 'd3-hierarchy';

declare module 'd3-hierarchy' {
  interface HierarchyNode<Datum> {
    _children?: this[] | undefined;
  }
}

export interface ColumnDetails<D> {
  name: string;
  displayName?: string;
  width: number;
  content?: <E extends BaseType, D0, P extends BaseType, D1>(
    root: d3.Selection<E, D0, P, D1>,
    width: number,
    update: (
      startingPoint: d3.HierarchyNode<{ index: number; id: string }>
    ) => void,
    mergedNodes: d3.Selection<any, any, any, any>,
    transition: d3.Transition<any, any, any, any>
  ) => void;
}

export interface TableData<D> {
  columns: ColumnDetails<D>[];
  root: d3.HierarchyNode<D>;
}

type S<D, E extends BaseType = BaseType> = d3.Selection<
  E,
  D & { index: number; id: string },
  null,
  undefined
>;

export function createNestedTable<D extends { name: string }>(
  svgRoot: d3.Selection<BaseType, unknown, null, undefined>,
  tableData: TableData<D>
) {
  const tableWidth = tableData.columns.reduce((acc, d) => acc + d.width, 0);
  const root = (
    tableData.root.copy() as HierarchyNode<D & { index: number; id: string }>
  ).eachBefore((d, i) => {
    d.data.index = i;
    d.data.id = d
      .ancestors()
      .reverse()
      .map((d) => d.data.name)
      .join('/');
    d._children = d.children;
  });
  const nodes = root.descendants();

  const containerGroup = svgRoot.append('g');

  const headerGroup = containerGroup
    .append('g')
    .attr('font-weight', 'bolder')
    .attr('transform', `translate(0, ${NODE_SIZE / 2})`)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle');
  const gridGroup = containerGroup.append('g').attr('stroke', '#ccc');
  const hGridGroup = gridGroup.append('g');
  const vGridGroup = gridGroup.append('g');

  let tableHeight = nodes.length * NODE_SIZE;

  const startTransition = svgRoot.transition().duration(500);

  const containerOutline = containerGroup
    .append('rect')
    .attr('width', tableWidth)
    .attr('height', 0)
    .attr('fill', 'none')
    .attr('stroke', '#ccc')
    .attr('stroke-width', 1)
    .attr('rx', 5);

  const clipId = uniqid('table:');

  const clipPath = containerGroup
    .append('clipPath')
    .attr('id', clipId)
    .append('rect')
    .attr('width', tableWidth)
    .attr('height', 0)
    .attr('rx', 5);

  containerOutline.transition(startTransition).attr('height', tableHeight);
  clipPath.transition(startTransition).attr('height', tableHeight);

  containerGroup.attr('clip-path', `url(#${clipId})`);

  let currentXOffset = 0;
  const columnGroups: Array<
    d3.Selection<SVGGElement, unknown, null, undefined>
  > = [];

  for (const column of tableData.columns) {
    headerGroup
      .append('text')
      .text(column.displayName ?? column.name)
      .attr('x', currentXOffset + column.width / 2)
      .attr('y', 0);

    if (currentXOffset !== 0) {
      vGridGroup
        .append('path')
        .attr('d', `M${currentXOffset},0 V${tableHeight}`);
    }

    const g = containerGroup.append('g');
    columnGroups.push(g);

    currentXOffset += column.width;
  }


  function update(
    startingPoint: d3.HierarchyNode<{ index: number; id: string }>
  ) {
    root.eachBefore((d, i) => {
      d.data.index = i;
    });

    const transition = svgRoot.transition().duration(150);

    const nodes = root
      .descendants()
      .sort((a, b) => (a.data.index > b.data.index ? 1 : -1));

    tableHeight = nodes.length * NODE_SIZE;
    containerOutline.transition(transition).attr('height', tableHeight);
    clipPath.transition(transition).attr('height', tableHeight);

    const hLines = hGridGroup
      .selectAll<
        SVGPathElement,
        d3.HierarchyNode<D & { index: number; id: string }>
      >('path')
      .data(nodes, (d) => d.data.id);

    const hLineEnter = hLines.enter().append('path').attr('stroke-opacity', 0);

    hLines
      .merge(hLineEnter)
      .transition(transition)
      .attr('stroke-opacity', 1)
      .attr('d', (d) => `M0,${(1 + d.data.index) * NODE_SIZE} h${tableWidth}`);

    hLines.exit().transition(transition).remove().attr('stroke-opacity', 0);

    let columnIndex = 0;
    let columnOffset = 0;
    for (const column of tableData.columns) {
      const columnGroup = columnGroups[columnIndex];
      const currentColumnOffset = columnOffset;
      columnOffset += column.width;

      columnIndex += 1;

      if (column.content) {
        const currentColumn = columnGroup
          .selectChildren<
            SVGGElement,
            d3.HierarchyNode<D & { index: number; id: string }>
          >('g')
          .data(nodes.slice(1), (d) => d.data.id);

        const currentColumnEnter = currentColumn
          .enter()
          .append('g')
          .attr('opacity', 0)
          .attr(
            'transform',
            (d) =>
              `translate(${currentColumnOffset}, ${
                startingPoint.data.index * NODE_SIZE
              })`
          );

        const mergedColumn = currentColumn.merge(currentColumnEnter);

        mergedColumn
          .transition(transition)
          .attr('opacity', 1)
          .attr(
            'transform',
            (d) =>
              `translate(${currentColumnOffset}, ${d.data.index * NODE_SIZE})`
          );

        column.content(currentColumnEnter, column.width, update, mergedColumn, transition);

        currentColumn
          .exit()
          .transition(transition)
          .remove()
          .attr('opacity', 0)
          .attr(
            'transform',
            (d) =>
              `translate(${currentColumnOffset}, ${
                startingPoint.data.index * NODE_SIZE
              })`
          );
      }
    }
  }

  update(root);

  return containerGroup;
}
