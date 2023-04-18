import CoordStore from '/src/store/coordStore.js'
import PanStore from '/src/store/panStore.js'

export function applyChangesOnPan(currentGLCoord, ctx) {
  let { x, y } = currentGLCoord
  if (PanStore.moved.x) {
    x = x - PanStore.init.x + PanStore.moved.x
    y = y - PanStore.init.y + PanStore.moved.y
  } else {
    x = x - PanStore.init.x
    y = y - PanStore.init.y
  }
  ctx.setTransform(
    CoordStore.canvas.scale.x,
    0,
    0,
    CoordStore.canvas.scale.y,
    x,
    y
  )
}
