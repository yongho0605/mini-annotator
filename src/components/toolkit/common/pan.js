import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  guideLineCanvas,
  imgCtx,
  imgCanvas,
} from '/src/components/canvas/canvasExport.js'
import PanModule from '/src/components/toolkit/utils/common/panUtil.js'
import MouseButtons from '/src/components/modules/mouseButtons.js'
import Store from '/src/store/store.js'
import State from '/src/store/state/state.js'

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
      PanModule.applyChangesOnPan(currentGLCoord, imgCtx)
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
      if (evt.button === MouseButtons.LEFT) {
        State.pressed.mouse = true
        Store.pan.initCoord = getCanvasMousePosition(evt, imgCanvas)
        pressed.space && (Store.pan.initTransform = imgCtx.getTransform())
        checkPressed()
      }
    }
    function onMouseUp(evt) {
      if (evt.button === MouseButtons.LEFT) {
        if (pressed.space && (zoom.panedDistance.x || zoom.panedDistance.y)) {
          // const conditionIdentifier = (axis) =>
          //   Store.pan.movedArr[Store.pan.movedArr.length - 1][axis] ===
          //   zoom.panedDistance[axis]
          // if (
          //   Store.pan.movedArr.length >= 1 &&
          //   (conditionIdentifier('x') || conditionIdentifier('y'))
          // ) {
          //   console.log('실행되나?')
          //   zoom.panedDistance = {x: 0, y: 0}
          // }
          Store.pan.movedArr.push({ ...zoom.panedDistance })

          console.log(Store.pan.movedArr)
        }
        State.pressed.mouse = false
        removeEvent()
      }
    }
    function onKeyDown(evt) {
      PanModule.onKeyHandler(evt, true, checkPressed())
    }
    function onKeyUp(evt) {
      PanModule.onKeyHandler(evt, false, removeEvent())
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    guideLineCanvas.addEventListener('mousedown', onMouseDown)
    guideLineCanvas.addEventListener('mouseup', onMouseUp)
  },
}
export default pan
