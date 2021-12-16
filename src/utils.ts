import * as d3 from 'd3';
import { NODE_SIZE } from './config';

export function wrap(maxWidth: number) {
  return function() {
    var self = d3.select(this),
      textLength = self.node().getComputedTextLength(),
      text = self.text();

    while (
      textLength > maxWidth - self.node().getBBox().x  &&
      text.length > 0
    ) {
      text = text.slice(0, -1);
      self.text(text + '...');
      textLength = self.node().getComputedTextLength();
    }
  };
}
