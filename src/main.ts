import { select } from 'd3-selection';
import { linkHorizontal } from 'd3-shape';

import { accountModel } from './accountData';
import { NODE_SIZE, ICON_SIZE } from './config';
import noteIcon from './icons/note.svg';
import { createCollectionTable } from './tables/collectionTable';
import { createNoteTooltip, tooltip } from './tooltip';

if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    window.document.body.innerHTML = '';
  });

  module.hot.accept();
}

const svg = select(document.body).append('svg');

svg
  // .attr('viewBox', [-NODE_SIZE / 2, (-NODE_SIZE * 3) / 2, 800, (nodes.length + 2) * nodeSize])
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

container.attr('transform', `translate(500, 100)`);

const d = linkHorizontal();

const v = d({
  target: [350, NODE_SIZE * 2 + NODE_SIZE / 2],
  source: [500, 100 + NODE_SIZE * 3 + NODE_SIZE / 2],
});

createNoteTooltip(svg, (d) => 'This is a link note...')
  .attr('x', (350 + 500) / 2)
  .attr(
    'y',
    (NODE_SIZE * 2 + NODE_SIZE / 2 + (100 + NODE_SIZE * 3 + NODE_SIZE / 2)) /
      2 -
      ICON_SIZE
  );

svg
  .append('path')
  .attr('class', 'link')
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
