import * as d3 from 'd3';
import { NODE_SIZE } from './config';
import { BaseType } from 'd3-selection';

export function wrap(maxWidth: number) {
  return function (this: SVGTextElement) {
    var self = d3.select(this),
      textLength = self.node()?.getComputedTextLength() ?? 0,
      text = self.text();

    while (
      textLength > maxWidth - (self.node()?.getBBox().x ?? 0) &&
      text.length > 0
    ) {
      text = text.slice(0, -1);
      self.text(text + '...');
      textLength = self.node()?.getComputedTextLength() ?? 0;
    }
  };
}
