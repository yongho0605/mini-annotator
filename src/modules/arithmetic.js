export default {
  sum2DCoord: (Array, axis) => Array.reduce((acc, val) => acc + val[axis], 0),
}
