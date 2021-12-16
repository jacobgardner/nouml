import { NODE_SIZE } from './config';
import uniqid from 'uniqid';
import { wrap } from './utils';

export interface ColumnDetails<D> {
  name: string;
  displayName?: string;
  width: number;
  primary?: boolean;
  content?: <E extends SVGElement>(
    root: d3.Selection<E, unknown, null, undefined>,
    width: number
  ) => void;
}

export interface TableData<D> {
  columns: ColumnDetails<D>[];
  root: d3.HierarchyNode<D>;
}

export function createNestedTable<E extends SVGElement, D>(
  svgRoot: d3.Selection<E, unknown, null, undefined>,
  tableData: TableData<D>
) {
  const tableWidth = tableData.columns.reduce((acc, d) => acc + d.width, 0);
  const root = tableData.root.copy().eachBefore((d, i) => {
    d.data.index = i;
    d.id = d
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
  let primaryWidth = 0;
  let primaryOffset = 0;
  const columnGroups: Array<
    d3.Selection<SVGGElement, unknown, null, undefined>
  > = [];
  let primaryGroup:
    | d3.Selection<SVGGElement, unknown, null, undefined>
    | undefined;
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

    if (column.primary) {
      primaryGroup = g;
      primaryOffset = currentXOffset;
      primaryWidth = column.width;
    }

    currentXOffset += column.width;
  }

  if (!primaryGroup) {
    throw new Error('Must have a primary group');
  }

  function update(startingPoint: d3.HierarchyNode<{ index?: number }>) {
    if (!primaryGroup) {
      throw new Error('Must have a primary group');
    }

    root.eachBefore((d, i) => {
      d.data.index = i;
    });

    const transition = svgRoot.transition().duration(150);

    const nodes = root
      .descendants()
      .sort((a, b) => a.data.index > b.data.index);

    tableHeight = nodes.length * NODE_SIZE;
    containerOutline.transition(transition).attr('height', tableHeight);
    clipPath.transition(transition).attr('height', tableHeight);

    const hLines = hGridGroup.selectAll('path').data(nodes, (d) => d.id);

    const hLineEnter = hLines.enter().append('path').attr('stroke-opacity', 0);

    hLines
      .merge(hLineEnter)
      .transition(transition)
      .attr('stroke-opacity', 1)
      .attr('d', (d) => `M0,${(1 + d.data.index) * NODE_SIZE} h${tableWidth}`);

    hLines.exit().transition(transition).remove().attr('stroke-opacity', 0);

    const primaryNode = primaryGroup
      .selectChildren('g')
      .data(nodes.slice(1), (d) => {
        return d.id;
      });

    const primaryEnter = primaryNode
      .enter()
      .append('g')
      .attr('data-id', 'primaryNode')
      .attr('fill-opacity', 0)
      .attr(
        'transform',
        (d) =>
          `translate(${primaryOffset + (d.depth - 1) * NODE_SIZE}, ${
            startingPoint.data.index * NODE_SIZE + NODE_SIZE / 2
          })`
      )
      .on('click', (event, d) => {
        if (d.children || d._children) {
          d.children = d.children ? null : d._children;
          update(d);
        }
      });

    primaryNode
      .merge(primaryEnter)
      .transition(transition)
      .attr('fill-opacity', 1)
      .attr(
        'transform',
        (d) =>
          `translate(${primaryOffset + (d.depth - 1) * NODE_SIZE}, ${
            d.data.index * NODE_SIZE + NODE_SIZE / 2
          })`
      );

    const textAndCaret = primaryEnter
      .append('g')
      .attr('dominant-baseline', 'middle')
      .attr('cursor', (d) =>
        d.children || d._children ? 'pointer' : 'default'
      );

    console.log(primaryWidth);

    textAndCaret
      .append('text')
      .text((d) => d.data.name)
      .attr('x', NODE_SIZE)
      .each(function (d) {
        wrap(primaryWidth - (d.depth -1) * NODE_SIZE).call(this);
      });

    const caret = textAndCaret
      .append('text')
      .attr('class', 'caret')
      .attr('font-family', 'FontAwesome')
      .text('')
      .attr('text-anchor', 'middle')
      .attr('x', NODE_SIZE / 2)
      .attr('visibility', (d) =>
        d.children || d._children ? 'visible' : 'hidden'
      )
      .attr('transform', `rotate(0, ${NODE_SIZE / 2}, 0)`);

    primaryNode
      .merge(primaryEnter)
      .selectAll('.caret')
      .transition(transition)
      .attr(
        'transform',
        (d) => `rotate(${d.children ? 90 : 0}, ${NODE_SIZE / 2}, 0)`
      );

    primaryNode
      .exit()
      .transition(transition)
      .remove()
      .attr('fill-opacity', 0)
      .attr(
        'transform',
        (d) =>
          `translate(${primaryOffset + (d.depth - 1) * NODE_SIZE}, ${
            startingPoint.data.index * NODE_SIZE + NODE_SIZE / 2
          })`
      );

    let columnIndex = 0;
    let columnOffset = 0;
    for (const column of tableData.columns) {
      const columnGroup = columnGroups[columnIndex];
      const currentColumnOffset = columnOffset;
      columnOffset += column.width;

      columnIndex += 1;
      if (column.primary) {
        continue;
      }

      if (column.content) {
        const currentColumn = columnGroup
          .selectChildren('g')
          .data(nodes.slice(1), (d) => d.id);

        const currentColumnEnter = currentColumn
          .enter()
          .append('g')
          .attr('opacity', 0)
          .attr(
            'transform',
            (d) =>
              `translate(${currentColumnOffset}, ${
                startingPoint.data.index * NODE_SIZE + NODE_SIZE / 2
              })`
          );

        currentColumn
          .merge(currentColumnEnter)
          .transition(transition)
          .attr('opacity', 1)
          .attr(
            'transform',
            (d) =>
              `translate(${currentColumnOffset}, ${
                d.data.index * NODE_SIZE + NODE_SIZE / 2
              })`
          );

        column.content(currentColumnEnter, column.width);

        currentColumn
          .exit()
          .transition(transition)
          .remove()
          .attr('opacity', 0)
          .attr(
            'transform',
            (d) =>
              `translate(${currentColumnOffset}, ${
                startingPoint.data.index * NODE_SIZE + NODE_SIZE / 2
              })`
          );
      }
    }
  }

  update(root);
}
