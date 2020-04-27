import ttrans from './ttrans';

function move(node, x, y, k) {
  node.attr(...ttrans(x, y, k));
}

export default move;
