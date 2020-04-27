function addSvgStyle(svg, styleCss) {
  if (!svg) throw Error('svg is missing!');
  svg
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
    .append('style')
    .text(styleCss)
    .attr('type', 'text/css');
}

export default addSvgStyle;
