import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  guideLineCanvas,
  imgCtx,
  imgCanvas,
} from '/src/components/canvas/canvasExport.js'
import {
  applyChangesOnPan,
  cursorStyleHandler,
} from '/src/components/toolkit/utils/common/panUtil.js'
import MouseButtons from '/src/components/modules/mouseButtons.js'
import Store from '/src/store/store.js'
import State from '/src/store/state/state.js'

const pan = {
  init(img) {
    function removeEvent() {
      guideLineCanvas.removeEventListener('mousemove', onMouseMove)
    }

    function onMouseMove(evt) {
      imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)
      const currentGLCoord = getCanvasMousePosition(evt, imgCanvas)
      applyChangesOnPan(currentGLCoord, imgCtx)
      imgCtx.drawImage(
        img,
        Store.img.translation.x,
        Store.img.translation.y,
        Store.img.size.width,
        Store.img.size.height
      )
    }

    function checkPressed() {
      if (State.pressed.space && State.pressed.mouse) {
        guideLineCanvas.addEventListener('mousemove', onMouseMove)
      }
    }
    function onMouseDown(evt) {
      if (evt.button === MouseButtons.LEFT) {
        State.pressed.mouse = true
        Store.pan.initCoord = getCanvasMousePosition(evt, imgCanvas)
        State.pressed.space && (Store.pan.initTransform = imgCtx.getTransform())
        checkPressed()
      }
    }
    function onMouseUp(evt) {
      if (evt.button === MouseButtons.LEFT) {
        State.pressed.mouse = false
        removeEvent()
      }
    }
    function onKeyDown(evt) {
      if (evt.code === 'Space') {
        State.pressed.space = true
        cursorStyleHandler(guideLineCanvas)
        checkPressed()
      }
    }
    function onKeyUp(evt) {
      if (evt.code === 'Space') {
        State.pressed.space = false
        cursorStyleHandler(guideLineCanvas)
        removeEvent()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    guideLineCanvas.addEventListener('mousedown', onMouseDown)
    guideLineCanvas.addEventListener('mouseup', onMouseUp)
  },
}
export default pan
