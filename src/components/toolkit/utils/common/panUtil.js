import Store from '/src/store/store.js'
import State from '/src/store/state/state.js'
import MouseButtons from '/src/modules/mouseButtons.js'
import { guideLineCanvas as canvas } from '/src/components/canvas/canvasExport.js'

const translate = { x: 0, y: 0 }
const { pan, zoom } = Store

const panUtils = {
  applyChangesOnPan: (originCurrentGLCoord, ctx) => {
    const getComputedTranslation = (axis) =>
      originCurrentGLCoord[axis] -
      pan.initCoord[axis] +
      pan.initTransform[axis === 'x' ? 'e' : 'f']

    translate.x = Store.pan.translate.x = getComputedTranslation('x')
    translate.y = Store.pan.translate.y = getComputedTranslation('y')

    if (zoom.scale.current !== 1 && (pan.translate.x || pan.translate.y)) {
      Store.zoom.panedDistance.x =
        (translate.x - pan.initTransform.e) / zoom.scale.current
      Store.zoom.panedDistance.y =
        (translate.y - pan.initTransform.f) / zoom.scale.current
      Store.zoom.panedTranslation = zoom.panedDistance
    }
    console.log(pan.translate)
    ctx.setTransform(
      zoom.scale.current,
      0,
      0,
      zoom.scale.current,
      pan.translate.x,
      pan.translate.y
    )
  },

  innerKeyEventHandler: (evt, boolean, callback) => {
    if (evt.code === 'Space') {
      State.pressed.space = boolean
      cursorStyleHandler()
      callback
    }
  },

  innerMouseEventHandler: (evt, boolean, callback) => {
    if (evt.button === MouseButtons.LEFT) {
      State.pressed.mouse = boolean
      callback
    }
  },
}

function cursorStyleHandler() {
  if (State.pressed.space) {
    State.pressed.mouse
      ? (canvas.style.cursor = 'grabbing')
      : (canvas.style.cursor = 'grab')
  } else {
    canvas.style.cursor = 'auto'
  }
}

export default panUtils
