import { select } from 'd3-selection';
import { linkHorizontal } from 'd3-shape';

import { accountModel } from './accountData';
import { NODE_SIZE, ICON_SIZE } from './config';
import noteIcon from './icons/note.svg';
import { createCollectionTable } from './tables/collectionTable';
import { tooltip } from './tooltip';

if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    window.document.body.innerHTML = '';
  });

  module.hot.accept();
}

const svg = select(document.body).append('svg');

// const tooltip = d3.select('#tooltip');

svg
  // .attr('viewBox', [-nodeSize / 2, (-nodeSize * 3) / 2, 800, (nodes.length + 2) * nodeSize])
  .attr('font-family', 'sans-serif')
  .attr('font-size', 10)
  .style('overflow', 'visible');

const container = createCollectionTable(svg, accountModel);
const ref = createCollectionTable(svg, {
  name: 'Fields',
  children: [
    { name: '_id', type: 'ObjectId' },
    { name: 'accountName', type: 'string' },
  ],
});

// const container = createNestedTable(svg as any, {
//   ...documentTableDetails,
//   root: hierarchy(accountModel),
// });

// const ref = createNestedTable(svg as any, {
//   ...documentTableDetails,
//   root: hierarchy({
//     name: 'Fields',
//     children: [
//       { name: '_id', type: 'ObjectId' },
//       { name: 'accountName', type: 'string' },
//     ],
//   }),
// });

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
