import { select } from 'd3-selection';

export const tooltip = select(document.body)
  .append('div')
  .attr('class', 'tooltip tooltip-hidden');
