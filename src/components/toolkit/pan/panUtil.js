import Store from '/src/Store/Store.js'
import PressedState from '/src/store/state/panState.js'

export function applyChangesOnPan(currentGLCoord, ctx) {
  let { x, y } = currentGLCoord
  if (Store.pan.moved.x) {
    x = x - Store.pan.init.x + Store.pan.moved.x
    y = y - Store.pan.init.y + Store.pan.moved.y
  } else {
    x = x - Store.pan.init.x
    y = y - Store.pan.init.y
  }
  ctx.setTransform(
    Store.coord.canvas.scale.x,
    0,
    0,
    Store.coord.canvas.scale.y,
    x,
    y
  )
}

export function cursorStyleHandler(canvas) {
  if (PressedState.space) {
    PressedState.mouse
      ? (canvas.style.cursor = 'grabbing')
      : (canvas.style.cursor = 'grab')
  } else {
    canvas.style.cursor = 'auto'
  }
}
