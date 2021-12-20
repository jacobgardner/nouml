import { BaseType, select } from 'd3-selection';
import { hierarchy } from 'd3-hierarchy';
import { linkHorizontal } from 'd3-shape';

import { accountModel, CollectionSchema, isSubdoc } from './accountData';
import { NODE_SIZE, ICON_SIZE } from './config';
import { createNestedTable, TableData } from './nestedTable';
import { wrap } from './utils';
import noteIcon from './icons/note.svg';
import copy from './icons/copy-to-clipboard.svg';

if (module.hot) {
  module.hot.dispose(function (data) {
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
          .attr('visibility', (d: any) => (d.data.notes ? 'visible' : 'hidden'))
          .attr('cursor', 'pointer')
          .on('mouseover', (evt, d: any) => {
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
          .text((d: any) => (d.data.optional ? '' : '*'))
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle');
      },
    },
    { name: 'Fields', width: 200, primary: true },
    {
      name: 'Type',
      width: 110,
      content(root, width) {
        root
          .append('text')
          .attr('x', NODE_SIZE / 2)
          .attr('y', NODE_SIZE / 2)
          .text((d: any) => (isSubdoc(d) ? '- ' : d.data.type))
          .attr('dominant-baseline', 'middle')
          .each(wrap(width - NODE_SIZE / 2 - ICON_SIZE))
          .append('title')
          .text((d: any) => (isSubdoc(d) ? '- ' : d.data.type));
        root
          .append('image')
          .attr('class', 'copy-to-clipboard')
          .attr('xlink:href', copy)
          .attr('height', ICON_SIZE)
          .attr('y', (NODE_SIZE - ICON_SIZE) / 2)
          .attr('x', width - NODE_SIZE)
          .attr('cursor', 'pointer')
          .on('click', (evt, d: any) => {
            navigator.clipboard.writeText(isSubdoc(d) ? '- ' : d.data.type);
          });
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
