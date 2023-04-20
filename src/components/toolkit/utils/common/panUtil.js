import Store from '/src/store/store.js'
import PressedState from '/src/store/state/panState.js'

export function applyChangesOnPan(originCurrentGLCoord, ctx) {
  const { pan, zoom } = Store
  Store.pan.translate = { ...originCurrentGLCoord }
  const getComputedTranslation = (axis) =>
    originCurrentGLCoord[axis] - pan.coord.init[axis] + pan.coord.moved[axis]

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
  if (PressedState.space) {
    PressedState.mouse
      ? (canvas.style.cursor = 'grabbing')
      : (canvas.style.cursor = 'grab')
  } else {
    canvas.style.cursor = 'auto'
  }
}
