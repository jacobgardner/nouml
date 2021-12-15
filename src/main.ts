import * as d3 from 'd3';
import {accountModel, CollectionModel} from './accountData';

if (module.hot) {
  module.hot.dispose(function (data) {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    window.document.body.innerHTML = '';
  });

  module.hot.accept();
}

const svg = d3.select(window.document.body).append('svg');

svg
  // .attr('viewBox', [-nodeSize / 2, (-nodeSize * 3) / 2, 800, (nodes.length + 2) * nodeSize])
  .attr('font-family', 'sans-serif')
  .attr('font-size', 10)
  .style('overflow', 'visible');

const nodeSize = 17;

const tableWidth = 500;
const firstColumn = 200;

function buildModel(collectionModel: CollectionModel) {
  let nodeCount = 0;
  const root = d3
    .hierarchy<{name: string; index?: number; type?: string; children?: unknown}>(collectionModel)
    .eachBefore((d, i) => {
      d.data.index = i;
      d._children = d.children;
      nodeCount = i;
    });

  const collectionGroup = svg.append('g');

  const nodeGroup = collectionGroup
    .append('g')
    .attr('transform', `translate(${nodeSize / 2}, ${nodeSize / 2})`);

  const rect = collectionGroup
    .append('rect')
    .attr('width', tableWidth)
    .attr('height', (nodeCount + 1) * nodeSize)
    .attr('rx', 5)
    .attr('stroke', '#ccc')
    .attr('stroke-width', 0.5)
    .attr('fill', 'none');

  const gridG = collectionGroup
    .append('g')
    .attr('fill', 'none')
    .attr('stroke-width', 0.5)
    .attr('stroke', '#ccc');

  const linksG = nodeGroup.append('g').attr('fill', 'none').attr('stroke', '#999');
  const textG = nodeGroup.append('g');

  nodeGroup.append('text').attr('x', firstColumn).attr('dy', '0.32em').text('Type');

  function update(startingPoint: d3.HierarchyNode<{}>) {
    root.eachBefore((d, i) => {
      d.data.index = i;
      nodeCount = i;
    });

    const nodes = root.descendants().sort((a, b) => a.data.index > b.data.index);
    const links = root.links();

    gridG
      .selectAll('path')
      .data(nodes.slice(0, -1))
      .join('path')
      .attr('d', (d) => `M0,${((d.data.index ?? -1) + 1) * nodeSize} h${tableWidth}`);

    gridG.append('path').attr('d', `M${firstColumn},0 V${(nodeCount + 1) * nodeSize} `);

    rect.attr('height', (nodeCount + 1) * nodeSize);

    const link = linksG.selectAll('path').data(links, (d) => d.target.id);

    const linkEnter = link
      .enter()
      .append('path')
      .attr(
        'd',
        (d) => `
        M${startingPoint.depth * nodeSize},${(startingPoint.data.index ?? -1) * nodeSize}
        V${(startingPoint.data.index ?? -1) * nodeSize}
        h${nodeSize}
      `
      );

    const transition = svg.transition().duration(1000);
    link
      .merge(linkEnter)
      .transition(transition)
      .attr(
        'd',
        (d) => `
        M${d.source.depth * nodeSize},${(d.source.data.index ?? -1) * nodeSize}
        V${(d.target.data.index ?? -1) * nodeSize}
        h${nodeSize}`
      );

    link
      .exit()
      .transition(transition)
      .remove()
      .attr(
        'd',
        (d) => `
        M${startingPoint.depth * nodeSize},${(startingPoint.data.index ?? -1) * nodeSize}
        V${(startingPoint.data.index ?? -1) * nodeSize}
        h${nodeSize}
      `
      );

    const node = textG.selectAll('g').data(nodes, (d) => d.id);

    const nodeEnter = node
      .enter()
      .append('g')
      .attr('transform', (d) => `translate(0,${(d.data.index ?? -1) * nodeSize})`);

    nodeEnter
      .append('circle')
      .attr('cx', (d) => d.depth * nodeSize)
      .attr('r', 2.5)
      .attr('fill', (d) => (d.children || d._children ? null : '#999'));

    node
      .merge(nodeEnter)
      .transition()
      .attr('x', (d) => d.depth * nodeSize + 6);

    nodeEnter
      .append('text')
      .attr('dy', '0.32em')
      .attr('x', (d) => d.depth * nodeSize + 6)
      .text((d) => d.data.name);

    nodeEnter
      .append('text')
      .attr('dy', '0.32em')
      .attr('x', firstColumn)
      .text((d) => d.data.type ?? '-');

    nodeEnter
      .attr('cursor', (d) => (d.children || d._children ? 'pointer' : 'default'))
      .on('click', (event, d) => {
        if (d.children || d._children) {
          d.children = d.children ? null : d._children;
          update(d);
        }
      });

    node.exit().remove();
  }

  update(root);
}

buildModel(accountModel);

// node.append('title').text((d) =>
//   d
//     .ancestors()
//     .reverse()
//     .map((d) => d.data.name)
//     .join('/')
// );

// // const firstColumn = svg
// //   .append('g');

// //   const elements = firstColumn
// //   .selectAll('g')
// //   .data(nodes)
// //   .join('g')
// //   .attr('transform', (d) => `translate(0, ${(d.data.index ?? -1) * nodeSize})`);

// // firstColumn
// //   .append('text')
// //   .attr('dy', '0.32em')
// //   .attr('y', -nodeSize)
// //   .attr('dx', 0)
// //   .attr('text-anchor', 'end')
// //   .attr('font-weight', 'bold')
// //   .text('Type');

// // elements
// //   .append('text')
// //   .attr('text-anchor', 'end')
// //   .attr('fill', (d) => (d.children ? null : '#555'))
// //   .text((d) => d.data.type ?? '-');

// console.log(root);
