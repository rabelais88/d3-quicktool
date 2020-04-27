# d3-quicktool

d3 utility functions for faster development

- [github](https://github.com/rabelais88/d3-quicktool)

```javascript
import {
  trans,
  ttrans,
  rgba,
  shortenText,
  move,
  moveCustom,
} from 'd3-quicktool';

const node = d3.select('mynode');

node.attr('transform', trans(x, y, scale));
node.attr(...ttrans(x, y, scale));
node.attr('fill', rgba(0, 0, 0, 1));
node.attr('text', (d) => shortenText(d, 3)); // 'aaaaaa' -> 'aaa...'
// can't use transition with move, moveCustom function
node.call(move, x, y, scale);
node.call(moveCustom, (d) => trans(d.x, d.y));

import { addSvgStyle, addOutlineStyle, setSize, addHitBox } from 'd3-quicktool';
const svg = d3.create('svg');
// styleCss should be a style in a plain HTML
// styleCss is used for svg -> canvas or file download
svg.call(addSvgStyle, styleCss);
svg.call(addOutlineStyle, {
  className: 'outlined',
  strokeWidth: '1px',
  stroke: 'white',
});
svg.append('text').attr('class', 'outlined'); // will appear as outlined text
const myrect = svg.append('rect').call(setSize, 10, 10); // 10x10 size rect
myrect.call(addHitBox, {
  // x: 0 // x and y are omittable
  // y: 0
  width: 10,
  height: 10,
  clicked: () => {},
  mouseEnter: () => {},
  mouseLeave: () => {},
}); // draw hitbox
```
