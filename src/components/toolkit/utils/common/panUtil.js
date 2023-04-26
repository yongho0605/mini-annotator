import Store from '/src/store/store.js'
import State from '/src/store/state/state.js'

export function applyChangesOnPan(originCurrentGLCoord, ctx) {
  const { pan, zoom } = Store

  const getComputedTranslation = (axis) => {
    const translate = axis === 'x' ? 'e' : 'f'
    return (
      originCurrentGLCoord[axis] -
      pan.initCoord[axis] +
      pan.initTransform[translate]
    )
  }

  Store.pan.translate.x = getComputedTranslation('x')
  Store.pan.translate.y = getComputedTranslation('y')

  console.log(pan.translate, originCurrentGLCoord.x - pan.initCoord.x)

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
