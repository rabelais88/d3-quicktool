import addSvgStyle from './addSvgStyle';

/*
  svg.call(addOutlineStyle, { stroke: 'black', strokeWidth: '2px', className: 'my-outline' });
  element.attr('class', 'my-outline');
*/
const addOutlineStyle = (
  node,
  { stroke = 'white', strokeWidth = '1px', className = 'text-outline' }
) =>
  node.call(
    addSvgStyle,
    `
.${className} {
    paint-order: stroke;
    stroke: ${stroke};
    stroke-width: ${strokeWidth};
    stroke-linecap: butt;
    stroke-linejoin: miter;
}
`
  );

export default addOutlineStyle;
