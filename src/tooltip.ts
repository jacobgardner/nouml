import { BaseType, select, Selection } from 'd3-selection';
import noteIcon from './icons/note.svg';
import { ICON_SIZE } from './config';

export const tooltip = select(document.body)
  .append('div')
  .attr('class', 'tooltip tooltip-hidden');

export function createNoteTooltip<B extends BaseType, D, P extends BaseType>(
  root: Selection<B, D, P, D>,
  f: (d: D) => string
) {
  return root
    .append('image')
    .attr('xlink:href', noteIcon)
    // .attr('x', (width - ICON_SIZE) / 2)
    // .attr('y', (NODE_SIZE - ICON_SIZE) / 2)
    .attr('height', ICON_SIZE)
    // .attr('visibility', (d) => (d.data.notes ? 'visible' : 'hidden'))
    .attr('cursor', 'pointer')
    .on('mouseover', (evt, d) => {
      tooltip.classed('tooltip-hidden', false);
      const node = tooltip.node();
      const notes = f(d);
      if (node) {
        node.innerHTML = notes;
      }
      tooltip.style('left', `${evt.pageX + 15}px`);
      tooltip.style('top', `${evt.pageY}px`);
    })
    .on('mousemove', (evt: MouseEvent) => {
      tooltip.style('left', `${evt.pageX + 15}px`);
      tooltip.style('top', `${evt.pageY}px`);
    })
    .on('mouseleave', () => {
      tooltip.classed('tooltip-hidden', true);
    });
}
