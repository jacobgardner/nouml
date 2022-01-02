import copy from './icons/copy-to-clipboard.svg';
import { NODE_SIZE, ICON_SIZE } from './config';
import { BaseType, Selection } from 'd3-selection';

export function addCopyToClipboard<
  E extends BaseType,
  D,
  P extends BaseType,
  D1
>(elem: Selection<E, D, P, D1>, width: number, text: (data: D) => string) {
  elem
    .append('image')
    .attr('class', 'copy-to-clipboard')
    .attr('xlink:href', copy)
    .attr('height', ICON_SIZE)
    .attr('y', (NODE_SIZE - ICON_SIZE) / 2)
    .attr('x', width - NODE_SIZE)
    .attr('cursor', 'pointer')
    .on('click', (_evt, d) => {
      navigator.clipboard.writeText(text(d));
    });
}
