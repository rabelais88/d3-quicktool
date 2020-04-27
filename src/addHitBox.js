import ttrans from './ttrans';

/*
  function myMethod(d, i, a) {
   ...
  }
  element.call(addHitBox, { x:0, y:0, _width: 200, _height:300, click:myMethod });
*/
const addHitBox = (
  node,
  {
    x = 0,
    y = 0,
    width: _width = 0,
    height: _height = 0,
    clicked = () => {},
    mouseEnter = () => {},
    mouseLeave = () => {},
  }
) =>
  node
    .append('rect')
    .attr('opacity', 0)
    .attr(...ttrans(x, y))
    .attr('width', _width)
    .attr('height', _height)
    .on('click', clicked)
    .on('mouseenter', mouseEnter)
    .on('mouseleave', mouseLeave);

export default addHitBox;
