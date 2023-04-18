import Store from '/src/store/store.js'
import PressedState from '/src/store/state/panState.js'

export function applyChangesOnPan(originCurrentGLCoord, ctx) {
  const { pan } = Store
  const translate = { ...originCurrentGLCoord }
  const getComputedDisplacement = (axis) =>
    originCurrentGLCoord[axis] - pan.coord.init[axis]

  if (pan.coord.moved.x) {
    translate.x = getComputedDisplacement('x') + pan.coord.moved.x
    translate.y = getComputedDisplacement('y') + pan.coord.moved.y
  } else {
    translate.x = getComputedDisplacement('x')
    translate.y = getComputedDisplacement('y')
  }

  ctx.setTransform(
    Store.canvas.scale.x,
    0,
    0,
    Store.canvas.scale.y,
    translate.x,
    translate.y
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
