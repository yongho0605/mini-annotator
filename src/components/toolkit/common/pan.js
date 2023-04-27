import {
  guideLineCanvas,
  imgCtx,
  imgCanvas,
  getCanvasMousePosition,
} from '/src/components/canvas/canvasExport.js'
import * as CanvasExport from '/src/components/canvas/canvasExport.js'
import PanUtils from '/src/components/toolkit/utils/common/panUtil.js'
import Store from '/src/store/store.js'
import State from '/src/store/state/state.js'
import Arithmetic from '/src/modules/Arithmetic.js'
import MouseButtons from '/src/modules/mouseButtons.js'

const { zoom } = Store
const { pressed } = State

const pan = {
  init(img) {
    function removeEvent() {
      guideLineCanvas.removeEventListener('mousemove', onMouseMove)
    }
    function onMouseMove(evt) {
      imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)
      const currentGLCoord = getCanvasMousePosition(evt, imgCanvas)
      PanUtils.applyChangesOnPan(currentGLCoord, imgCtx)
      imgCtx.drawImage(
        img,
        Store.img.translation.x,
        Store.img.translation.y,
        Store.img.size.width,
        Store.img.size.height
      )
    }
    function checkPressed() {
      if (pressed.space && pressed.mouse) {
        guideLineCanvas.addEventListener('mousemove', onMouseMove)
      }
    }
    function onMouseDown(evt) {
      // if (evt.button === MouseButtons.LEFT) {
      //   State.pressed.mouse = true
      //   Store.pan.initCoord = getCanvasMousePosition(evt, imgCanvas)
      //   pressed.space && (Store.pan.initTransform = imgCtx.getTransform())
      //   checkPressed()
      // }
      PanUtils.innerMouseEventHandler(evt, true, () => {
        Store.pan.initCoord = getCanvasMousePosition(evt, imgCanvas)
        pressed.space && (Store.pan.initTransform = imgCtx.getTransform())
        checkPressed()
      })
    }
    function onMouseUp(evt) {
      if (evt.button === MouseButtons.LEFT) {
        if (pressed.space && (zoom.panedDistance.x || zoom.panedDistance.y)) {
          const conditionIdentifier = (axis) =>
            Store.pan.movedArr.length >= 1 &&
            Store.pan.movedArr.at(-1)[axis] === zoom.panedDistance[axis]

          conditionIdentifier('x') && (zoom.panedDistance.x = 0)
          conditionIdentifier('y') && (zoom.panedDistance.y = 0)
          Store.pan.movedArr.push({ ...zoom.panedDistance })
          const panedTranslation = {
            x: Arithmetic.sum2DCoord(Store.pan.movedArr, 'x'),
            y: Arithmetic.sum2DCoord(Store.pan.movedArr, 'y'),
          }
          Store.zoom.panedTranslation = panedTranslation
        }
        State.pressed.mouse = false
        removeEvent()
      }
      // PanUtils.innerMouseEventHandler(evt, false, () => {
      //   if (pressed.space && (zoom.panedDistance.x || zoom.panedDistance.y)) {
      //     const conditionIdentifier = (axis) =>
      //       Store.pan.movedArr.length >= 1 &&
      //       Store.pan.movedArr.at(-1)[axis] === zoom.panedDistance[axis]

      //     conditionIdentifier('x') && (zoom.panedDistance.x = 0)
      //     conditionIdentifier('y') && (zoom.panedDistance.y = 0)
      //     Store.pan.movedArr.push({ ...zoom.panedDistance })
      //     const panedTranslation = {
      //       x: Arithmetic.sum2DCoord(Store.pan.movedArr, 'x'),
      //       y: Arithmetic.sum2DCoord(Store.pan.movedArr, 'y'),
      //     }
      //     Store.zoom.panedTranslation = panedTranslation
      //   }
      //   removeEvent()
      // })
    }
    function onKeyDown(evt) {
      PanUtils.innerKeyEventHandler(evt, true, checkPressed())
    }
    function onKeyUp(evt) {
      PanUtils.innerKeyEventHandler(evt, false, removeEvent())
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    guideLineCanvas.addEventListener('mousedown', onMouseDown)
    guideLineCanvas.addEventListener('mouseup', onMouseUp)
  },
}
export default pan
