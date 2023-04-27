import Store from '/src/store/store.js'
import State from '/src/store/state/state.js'
import { guideLineCanvas as canvas } from '/src/components/canvas/canvasExport.js'

const translate = { x: 0, y: 0 }

const panModule = {
  applyChangesOnPan(originCurrentGLCoord, ctx) {
    const { pan, zoom } = Store

    const getComputedTranslation = (axis) => {
      const transform = axis === 'x' ? 'e' : 'f'
      return (
        originCurrentGLCoord[axis] -
        pan.initCoord[axis] +
        pan.initTransform[transform]
      )
    }

    translate.x = Store.pan.translate.x = getComputedTranslation('x')
    translate.y = Store.pan.translate.y = getComputedTranslation('y')

    if (zoom.scale.current !== 1 && (pan.translate.x || pan.translate.y)) {
      Store.zoom.panedDistance.x = translate.x - pan.initTransform.e
      Store.zoom.panedDistance.y = translate.y - pan.initTransform.f

      Store.zoom.panedTranslation.x = zoom.panedDistance.x
      Store.zoom.panedTranslation.y = zoom.panedDistance.y
    }

    console.log(pan.translate, zoom.panedTranslation)

    ctx.setTransform(
      zoom.scale.current,
      0,
      0,
      zoom.scale.current,
      pan.translate.x,
      pan.translate.y
    )
  },

  onKeyHandler(evt, boolean, callback) {
    if (evt.code === 'Space') {
      State.pressed.space = boolean
      cursorStyleHandler()
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

export default panModule
