import * as d3 from 'd3';
import { accountModel, CollectionSchema, isSubdoc } from './accountData';
import { NODE_SIZE, ICON_SIZE } from './config';
import { createNestedTable } from './nestedTable';
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

const tooltip = d3
  .select(document.body)
  .append('div')
  .attr('class', 'tooltip tooltip-hidden');
const svg = d3.select(document.body).append('svg');

// const tooltip = d3.select('#tooltip');

svg
  // .attr('viewBox', [-nodeSize / 2, (-nodeSize * 3) / 2, 800, (nodes.length + 2) * nodeSize])
  .attr('font-family', 'sans-serif')
  .attr('font-size', 10)
  .style('overflow', 'visible');

createNestedTable(svg, {
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
            tooltip.node().innerHTML = d.data.notes;
            tooltip.style('left', `${evt.clientX + 15}px`);
            tooltip.style('top', `${evt.clientY}px`);
          })
          .on('mousemove', (evt: MouseEvent, d) => {
            tooltip.style('left', `${evt.clientX + 15}px`);
            tooltip.style('top', `${evt.clientY}px`);
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
    { name: 'Fields', width: 200, primary: true },
    {
      name: 'Type',
      width: 110,
      content(root, width) {
        root
          .append('text')
          .attr('x', NODE_SIZE / 2)
          .attr('y', NODE_SIZE / 2)
          .text((d) => (isSubdoc(d) ? '- ' : d.data.type))
          .attr('dominant-baseline', 'middle')
          .each(wrap(width - NODE_SIZE / 2 - ICON_SIZE))
          .append('title')
          .text((d) => (isSubdoc(d) ? '- ' : d.data.type));
        root
          .append('image')
          .attr('class', 'copy-to-clipboard')
          .attr('xlink:href', copy)
          .attr('height', ICON_SIZE)
          .attr('y', (NODE_SIZE - ICON_SIZE) / 2)
          .attr('x', width - NODE_SIZE)
          .attr('cursor', 'pointer')
          .on('click', (evt, d) => {
            navigator.clipboard.writeText(isSubdoc(d) ? '- ' : d.data.type);
          });
      },
    },
  ],
  root: d3.hierarchy(accountModel),
});
