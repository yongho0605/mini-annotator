import Store from '/src/store/store.js'
import PressedState from '/src/store/state/panState.js'

export function applyChangesOnPan(originCurrentGLCoord, ctx) {
  const { pan, zoom } = Store
  Store.pan.willTranslate = { ...originCurrentGLCoord }
  const getComputedDisplacement = (axis, targetCoord) =>
    originCurrentGLCoord[axis] - pan.coord.init[axis] + targetCoord[axis]

  if (pan.coord.moved.x) {
    Store.pan.willTranslate.x = getComputedDisplacement('x', pan.coord.moved)
    Store.pan.willTranslate.y = getComputedDisplacement('y', pan.coord.moved)
  } else {
    Store.pan.willTranslate.x = getComputedDisplacement('x', zoom.translation)
    Store.pan.willTranslate.y = getComputedDisplacement('y', zoom.translation)
  }

  ctx.setTransform(
    zoom.scale.current,
    0,
    0,
    zoom.scale.current,
    pan.willTranslate.x,
    pan.willTranslate.y
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
