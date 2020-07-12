/* eslint-disable import/first,import/no-extraneous-dependencies */

export default {
  title: 'd3-quicktool-basics',
};

import * as d3 from 'd3';
import {
  move,
  moveCustom,
  setSize,
  trans,
  rgba,
  addOutlineStyle,
} from '../src/main';

export const Basics = () => {
  const svg = d3.create('svg');
  svg.call(setSize, 300, 300);
  svg.call(addOutlineStyle, {
    color: 'white',
    className: 'outlined',
    strokeWidth: '2px',
  });

  svg
    .append('rect')
    .call(setSize, 300, 300)
    .attr('fill', rgba(100, 100, 100, 0.8));
  svg
    .append('text')
    .attr('class', 'outlined')
    .call(move, () => [30, 50])
    .text('hello world!');

  svg
    .append('text')
    .datum({ x: 30, y: 100, text: 'welcome to my world' })
    .text((d) => d.text)
    .call(moveCustom, (d) => trans(d.x, d.y));

  return svg.node();
};

// export const Button = () => {
//   const btn = document.createElement('button');
//   btn.type = 'button';
//   btn.innerText = 'Hello Button';
//   btn.addEventListener('click', e => console.log(e));
//   return btn;
// };
