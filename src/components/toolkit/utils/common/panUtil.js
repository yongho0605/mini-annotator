import Store from '/src/store/store.js'
import State from '/src/store/state/state.js'

export function applyChangesOnPan(originCurrentGLCoord, ctx) {
  const { pan, zoom, canvas } = Store

  const getComputedTranslation = (axis) =>
    originCurrentGLCoord[axis] - pan.initCoord[axis] + canvas.moved[axis]

  Store.pan.translate.x = getComputedTranslation('x')
  Store.pan.translate.y = getComputedTranslation('y')

  console.log(pan.translate)
  ctx.setTransform(
    zoom.scale.current,
    0,
    0,
    zoom.scale.current,
    pan.translate.x,
    pan.translate.y
  )
}

export function cursorStyleHandler(canvas) {
  if (State.pressed.space) {
    State.pressed.mouse
      ? (canvas.style.cursor = 'grabbing')
      : (canvas.style.cursor = 'grab')
  } else {
    canvas.style.cursor = 'auto'
  }
}
