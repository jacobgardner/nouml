import { hierarchy, HierarchyNode } from 'd3-hierarchy';
import { BaseType, Selection } from 'd3-selection';
import { CollectionSchema, isStandaloneItem } from '../accountData';
import { ICON_SIZE, NODE_SIZE } from '../config';
import { addCopyToClipboard } from '../copyToClipboard';
import { createNestedTable, TableData } from '../nestedTable';
import { createNoteTooltip, tooltip } from '../tooltip';
import { wrap } from '../utils';
import noteIcon from '../icons/note.svg';

const xOffset = (d: HierarchyNode<unknown>) => (d.depth - 1) * NODE_SIZE;

const collectionTableLayout: Omit<TableData<CollectionSchema>, 'root'> = {
  columns: [
    {
      name: 'Notes',
      width: 20,
      displayName: '',
      content(root, width) {
        createNoteTooltip(root, (d) => d.data.notes ?? '')
          .attr('x', (width - ICON_SIZE) / 2)
          .attr('y', (NODE_SIZE - ICON_SIZE) / 2)
          .attr('visibility', (d) => (d.data.notes ? 'visible' : 'hidden'));
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

export function createCollectionTable<E extends BaseType>(
  root: Selection<E, unknown, null, undefined>,
  data: CollectionSchema
) {
  return createNestedTable(root as any, {
    ...collectionTableLayout,
    root: hierarchy(data),
  });
}
