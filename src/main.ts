import * as d3 from 'd3';
import { accountModel, CollectionSchema, isSubdoc } from './accountData';
import { NODE_SIZE } from './config';
import { createNestedTable } from './nestedTable';
import { wrap } from './utils';

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

createNestedTable(svg, {
  columns: [
    { name: 'Notes', width: 20, displayName: '' },
    {
      name: 'Required',
      width: 20,
      displayName: '*',
      content(root, width) {
        root
          .append('text')
          .attr('x', width / 2)
          .text((d) => (d.data.optional ? '' : '*'))
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle');
      },
    },
    { name: 'Fields', width: 200, primary: true },
    {
      name: 'Type',
      width: 100,
      content(root, width) {
        root
          .append('text')
          .attr('x', NODE_SIZE / 2)
          .text((d) => (isSubdoc(d) ? '- ' : d.data.type))
          .attr('dominant-baseline', 'middle')
          .each(wrap(width - NODE_SIZE / 2));
      },
    },
  ],
  root: d3.hierarchy(accountModel),
});

// const nodeSize = 17;

// // const tableWidth = 800;
// const fieldsWidth = 250;
// const typesWidth = 100;

// const tableWidth = [fieldsWidth, typesWidth].reduce((acc, v) => acc + v, 0);

// function buildModel(collectionModel: CollectionSchema) {
//   let nodeCount = 0;
//   const root = d3
//     .hierarchy<{
//       name: string;
//       index?: number;
//       type?: string;
//       children?: unknown;
//     }>(collectionModel)
//     .eachBefore((d, i) => {
//       d.data.index = i;
//       d.id = d
//         .ancestors()
//         .reverse()
//         .map((d) => d.data.name)
//         .join('/');
//       d._children = d.children;

//       nodeCount = i;
//     });

//   const collectionGroup = svg.append('g');

//   const nodeGroup = collectionGroup
//     .append('g')
//     .attr('transform', `translate(${nodeSize / 2}, ${nodeSize / 2})`);

//   const rect = collectionGroup
//     .append('rect')
//     .attr('width', tableWidth)
//     .attr('height', (nodeCount + 1) * nodeSize)
//     .attr('rx', 5)
//     .attr('stroke', '#ccc')
//     .attr('stroke-width', 0.5)
//     .attr('fill', 'none');

//   // Groups
//   const allGridLines = collectionGroup
//     .append('g')
//     .attr('fill', 'none')
//     .attr('stroke-width', 0.5)
//     .attr('stroke', '#ccc');

//   const vGridLines = allGridLines.append('g');

//   const vLine = vGridLines
//     .append('path')
//     .attr('d', `M${fieldsWidth},0 V${(nodeCount + 1) * nodeSize} `);

//   const gridG = allGridLines.append('g');

//   const linksG = nodeGroup
//     .append('g')
//     .attr('fill', 'none')
//     .attr('stroke', '#999');
//   const fieldsG = nodeGroup.append('g');
//   const textG = nodeGroup.append('g');

//   const headerGroup = nodeGroup.append('g').attr('font-weight', 'bold');

//   headerGroup
//     .append('text')
//     .attr('x', nodeSize)
//     .attr('dy', '0.32em')
//     .text('Fields');

//   headerGroup
//     .append('text')
//     .attr('x', fieldsWidth)
//     .attr('dy', '0.32em')
//     .text('Type');

//   function update(startingPoint: d3.HierarchyNode<{ index?: number }>) {
//     const transition = svg.transition().duration(250);

//     root.eachBefore((d, i) => {
//       d.data.index = i;
//       nodeCount = i;
//     });

//     const nodes = root
//       .descendants()
//       .sort((a, b) => a.data.index > b.data.index);
//     const links = root.links();

//     const grid = gridG
//       .selectAll('path')
//       .data(nodes.slice(0, -1), (d) => d.id.index);
//     const link = linksG.selectAll('path').data(links, (d) => d.target.id);
//     const node = textG
//       .selectAll('g')
//       .data(nodes.slice(1), (d: d3.HierarchyNode<{}>) => d.id);

//     vLine
//       .transition(transition)
//       .attr('d', `M${fieldsWidth},0 V${(nodeCount + 1) * nodeSize} `);

//     const gridEnter = grid
//       .enter()
//       .append('path')
//       .attr(
//         'd',
//         (d) => `M0,${((d.data.index ?? -1) + 1) * nodeSize} h${tableWidth}`
//       )
//       .attr('stroke-opacity', 0);

//     grid.merge(gridEnter).transition(transition).attr('stroke-opacity', 1);

//     grid.exit().transition(transition).remove().attr('stroke-opacity', 0);

//     rect.transition(transition).attr('height', (nodeCount + 1) * nodeSize);

//     const linkEnter = link
//       .enter()
//       .append('path')
//       .attr(
//         'd',
//         (d) => `
//         M${startingPoint.depth * nodeSize},${
//           (startingPoint.data.index ?? -1) * nodeSize
//         }
//         V${(startingPoint.data.index ?? -1) * nodeSize}
//         h${nodeSize}
//       `
//       )
//       .attr('stroke-opacity', 0);

//     link
//       .merge(linkEnter)
//       .transition(transition)
//       .attr(
//         'd',
//         (d) => `
//         M${d.source.depth * nodeSize},${(d.source.data.index ?? -1) * nodeSize}
//         V${(d.target.data.index ?? -1) * nodeSize}
//         h${nodeSize}`
//       )
//       .attr('stroke-opacity', 1);

//     link
//       .exit()
//       .transition(transition)
//       .remove()
//       .attr(
//         'd',
//         (d) => `
//         M${startingPoint.depth * nodeSize},${
//           (startingPoint.data.index ?? -1) * nodeSize
//         }
//         V${(startingPoint.data.index ?? -1) * nodeSize}
//         h${nodeSize}
//       `
//       )
//       .attr('stroke-opacity', 0);

//     const nodeEnter = node
//       .enter()
//       .append('g')
//       .attr(
//         'transform',
//         (d) => `translate(0,${(startingPoint.data.index ?? -1) * nodeSize})`
//       )
//       .attr('fill-opacity', 0);

//     nodeEnter
//       .append('circle')
//       .attr('cx', (d) => d.depth * nodeSize)
//       .attr('r', 2.5)
//       .attr('fill', (d) => (d.children || d._children ? null : '#999'));

//     node
//       .merge(nodeEnter)
//       .transition(transition)
//       .attr(
//         'transform',
//         (d) => `translate(0,${(d.data.index ?? -1) * nodeSize})`
//       )
//       .attr('fill-opacity', 1);

//     function wrap() {

//       var self = d3.select(this),
//         textLength = self.node().getComputedTextLength(),
//         text = self.text();

//       while (textLength > fieldsWidth - self.node().getBBox().x - (nodeSize) && text.length > 0) {
//         text = text.slice(0, -1);
//         self.text(text + '...');
//         textLength = self.node().getComputedTextLength();
//       }
//     }

//     nodeEnter
//       .append('text')
//       .attr('dy', '0.32em')
//       .attr('x', (d) => d.depth * nodeSize + 6)
//       .attr('max-width', fieldsWidth)
//       .text((d) => d.data.name)
//       // .attr('title', d=> d.data.name)
//       .each(wrap).append('title').text(d => d.data.name);

//     nodeEnter
//       .append('text')
//       .attr('dy', '0.32em')
//       .attr('x', fieldsWidth)
//       .text((d) => d.data.type ?? '-');

//     nodeEnter
//       .attr('cursor', (d) =>
//         d.children || d._children ? 'pointer' : 'default'
//       )
//       .on('click', (event, d) => {
//         if (d.children || d._children) {
//           d.children = d.children ? null : d._children;
//           update(d);
//         }
//       });

//     node
//       .exit()
//       .transition(transition)
//       .remove()
//       .attr(
//         'transform',
//         (d) => `translate(0,${(startingPoint.data.index ?? -1) * nodeSize})`
//       )
//       .attr('fill-opacity', 0);

//     transition.on('end', () => {
//       console.log(textG.node()?.getBBox());
//     });
//   }

//   update(root);
// }

// buildModel(accountModel);

// // node.append('title').text((d) =>
// //   d
// //     .ancestors()
// //     .reverse()
// //     .map((d) => d.data.name)
// //     .join('/')
// // );

// // // const firstColumn = svg
// // //   .append('g');

// // //   const elements = firstColumn
// // //   .selectAll('g')
// // //   .data(nodes)
// // //   .join('g')
// // //   .attr('transform', (d) => `translate(0, ${(d.data.index ?? -1) * nodeSize})`);

// // // firstColumn
// // //   .append('text')
// // //   .attr('dy', '0.32em')
// // //   .attr('y', -nodeSize)
// // //   .attr('dx', 0)
// // //   .attr('text-anchor', 'end')
// // //   .attr('font-weight', 'bold')
// // //   .text('Type');

// // // elements
// // //   .append('text')
// // //   .attr('text-anchor', 'end')
// // //   .attr('fill', (d) => (d.children ? null : '#555'))
// // //   .text((d) => d.data.type ?? '-');

// // console.log(root);
