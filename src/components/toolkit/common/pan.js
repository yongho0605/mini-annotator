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

    function onMouseMove(e) {
      imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)
      const currentGLCoord = getCanvasMousePosition(e, imgCanvas)

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
    function onMouseDown(e) {
      if (e.button === MouseButtons.LEFT) {
        State.pressed.mouse = true
        Store.pan.coord.init = getCanvasMousePosition(e, imgCanvas)
        checkPressed()
      }
    }
    function onMouseUp(e) {
      const transform = imgCtx.getTransform()
      if (e.button === MouseButtons.LEFT) {
        State.pressed.mouse = false
        Store.pan.coord.moved = { x: transform.e, y: transform.f }
        removeEvent()
      }
    }
    function onKeyDown(e) {
      if (e.code === 'Space') {
        State.pressed.space = true
        cursorStyleHandler(guideLineCanvas)
        checkPressed()
      }
    }
    function onKeyUp(e) {
      if (e.code === 'Space') {
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
