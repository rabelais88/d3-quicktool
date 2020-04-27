const trans = (x, y, k) => {
  const coord2d = `translate(${x},${y})`;
  if (!k) return coord2d;
  return `${coord2d} scale(${k})`;
};

export default trans;
