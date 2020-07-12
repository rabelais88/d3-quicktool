import trans from './trans';

/**
 * @example
 * node.call(move, (d, i, e) => [d.x, d.y, d.k]);
 */
// func should return [x,y] or [x,y,k]
const move = (node, func) => {
  node.attr('transform', (...args) => {
    const result = func(...args);
    if (!Array.isArray(result)) {
      throw Error(
        'result of ttrans function is not array! it should be [x,y] or [x,y,k]'
      );
    }
    const [x, y] = result;
    let k = null;
    // eslint-disable-next-line
    if (result.length >= 3) k = result[2];
    return trans(x, y, k);
  });
};

export default move;
