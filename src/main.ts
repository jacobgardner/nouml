import { select } from 'd3-selection';
import { hierarchy, HierarchyNode } from 'd3-hierarchy';
import { linkHorizontal } from 'd3-shape';

import {
  accountModel,
  CollectionSchema,
  isStandaloneItem,
} from './accountData';
import { NODE_SIZE, ICON_SIZE } from './config';
import { createNestedTable, TableData } from './nestedTable';
import { wrap } from './utils';
import noteIcon from './icons/note.svg';
import copy from './icons/copy-to-clipboard.svg';
import { addCopyToClipboard } from './copyToClipboard';

if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    window.document.body.innerHTML = '';
  });

  module.hot.accept();
}

const tooltip = select(document.body)
  .append('div')
  .attr('class', 'tooltip tooltip-hidden');
const svg = select(document.body).append('svg');

// const tooltip = d3.select('#tooltip');

svg
  // .attr('viewBox', [-nodeSize / 2, (-nodeSize * 3) / 2, 800, (nodes.length + 2) * nodeSize])
  .attr('font-family', 'sans-serif')
  .attr('font-size', 10)
  .style('overflow', 'visible');

const xOffset = (d: HierarchyNode<unknown>) => (d.depth - 1) * NODE_SIZE;

const documentTableDetails: Omit<TableData<CollectionSchema>, 'root'> = {
  columns: [
    {
      name: 'Notes',
      width: 20,
      displayName: '',
      content(root, width) {
        root
          .append('image')
          .attr('xlink:href', noteIcon)
          .attr('x', (width - ICON_SIZE) / 2)
          .attr('y', (NODE_SIZE - ICON_SIZE) / 2)
          .attr('height', ICON_SIZE)
          .attr('visibility', (d) => (d.data.notes ? 'visible' : 'hidden'))
          .attr('cursor', 'pointer')
          .on('mouseover', (evt, d) => {
            tooltip.classed('tooltip-hidden', false);
            const node = tooltip.node();
            if (node && d.data.notes) {
              node.innerHTML = d.data.notes;
            }
            tooltip.style('left', `${evt.pageX + 15}px`);
            tooltip.style('top', `${evt.pageY}px`);
          })
          .on('mousemove', (evt: MouseEvent, d) => {
            tooltip.style('left', `${evt.pageX + 15}px`);
            tooltip.style('top', `${evt.pageY}px`);
          })
          .on('mouseleave', (d) => {
            tooltip.classed('tooltip-hidden', true);
          });
      },
    },
    {
      name: 'Required',
      width: 20,
      displayName: '*',
      content(root, width) {
        root
          .append('text')
          .attr('x', width / 2)
          .attr('y', NODE_SIZE / 2)
          .text((d) => (d.data.optional ? '' : '*'))
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle');
      },
    },
    {
      name: 'Fields',
      width: 200,
      content(root, width, update, merged, transition) {
        const textAndCaret = root
          .append('g')
          .on('click', (event, d) => {
            if (d.children || d._children) {
              d.children = d.children ? undefined : d._children;
              update(d);
            }
          })
          .attr('cursor', (d) =>
            d.children || d._children ? 'pointer' : 'default'
          )
          .attr('dominant-baseline', 'middle')
          .attr(
            'transform',
            (d) => `translate(${xOffset(d)}, ${NODE_SIZE / 2})`
          );

        textAndCaret
          .append('text')
          .text((d) => d.data.name)
          .attr('x', NODE_SIZE)
          .each(function (d) {
            wrap(width - (d.depth - 1) * NODE_SIZE - NODE_SIZE).call(this);
          })
          .append('title')
          .text((d) => d.data.name);

        textAndCaret
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

        merged
          .selectAll<SVGElement, HierarchyNode<CollectionSchema>>('.caret')
          .transition(transition)
          .attr(
            'transform',
            (d) => `rotate(${d.children ? 90 : 0}, ${NODE_SIZE / 2}, 0)`
          );

        addCopyToClipboard(root, width, (d) => d.data.name);
      },
    },
    {
      name: 'Type',
      width: 110,
      content(root, width) {
        root
          .append('text')
          .attr('x', NODE_SIZE / 2)
          .attr('y', NODE_SIZE / 2)
          .text((d) => (isStandaloneItem(d) ? d.data.type : '- '))
          .attr('dominant-baseline', 'middle')
          .each(wrap(width - NODE_SIZE / 2 - ICON_SIZE))
          .append('title')
          .text((d) => (isStandaloneItem(d) ? d.data.type : '- '));

        addCopyToClipboard(root, width, (d) =>
          isStandaloneItem(d) ? d.data.type : '- '
        );
      },
    },
  ],
};

const container = createNestedTable(svg as any, {
  ...documentTableDetails,
  root: hierarchy(accountModel),
});

const ref = createNestedTable(svg as any, {
  ...documentTableDetails,
  root: hierarchy({
    name: 'Fields',
    children: [
      { name: '_id', type: 'ObjectId' },
      { name: 'accountName', type: 'string' },
    ],
  }),
});

container.attr('transform', `translate(500, 100)`);

const d = linkHorizontal();

const v = d({
  target: [350, NODE_SIZE * 2 + NODE_SIZE / 2],
  source: [500, 100 + NODE_SIZE * 3 + NODE_SIZE / 2],
});

svg
  .append('image')
  .attr('xlink:href', noteIcon)
  .attr('x', (350 + 500) / 2)
  .attr(
    'y',
    (NODE_SIZE * 2 + NODE_SIZE / 2 + (100 + NODE_SIZE * 3 + NODE_SIZE / 2)) /
      2 -
      ICON_SIZE
  )
  .attr('height', ICON_SIZE)
  .attr('cursor', 'pointer')
  .on('mouseover', (evt, d) => {
    tooltip.classed('tooltip-hidden', false);
    const node = tooltip.node();
    if (node) {
      node.innerHTML = 'This is a link note';
    }
    tooltip.style('left', `${evt.pageX + 15}px`);
    tooltip.style('top', `${evt.pageY}px`);
  })
  .on('mousemove', (evt: MouseEvent, d) => {
    tooltip.style('left', `${evt.pageX + 15}px`);
    tooltip.style('top', `${evt.pageY}px`);
  })
  .on('mouseleave', (d) => {
    tooltip.classed('tooltip-hidden', true);
  });

console.log(v);
svg
  .append('path')
  .attr('d', v)
  .attr('fill', 'none')
  .attr('stroke', '#ccc')
  .attr('marker-end', 'url(#link-arrow)');

const defs = svg.append('defs');
defs
  .append('marker')
  .attr('id', 'link-arrow')
  .attr('markerWidth', 10)
  .attr('markerHeight', 10)
  .attr('orient', 'auto')
  .attr('refY', 5)
  .attr('refX', 9)
  .append('path')
  .attr('d', 'M0,10 L9,5 L0,0')
  .attr('fill', 'none')
  .attr('stroke', '#ccc')
  .attr('stroke-width', 1.5);

const box = svg.node()?.getBBox();

if (box) {
  console.log(box);
  svg.attr('height', box.height);
  svg.attr('width', box.width);
}
