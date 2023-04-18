import CoordStore from '/src/store/coordStore.js'

export function applyChangesOnPan(panedCoord, currentGLCoord, ctx) {
  let { x, y } = currentGLCoord
  if (panedCoord.moved.x) {
    x = x - panedCoord.init.x + panedCoord.moved.x
    y = y - panedCoord.init.y + panedCoord.moved.y
  } else {
    x = x - panedCoord.init.x
    y = y - panedCoord.init.y
  }
  ctx.setTransform(CoordStore.canvas.scale.x, 0, 0, CoordStore.canvas.scale.y, x, y)
}
