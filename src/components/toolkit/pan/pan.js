import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  guideLineCanvas,
  imgCtx,
  imgCanvas,
} from '/src/components/canvas/canvasExport.js'
import {
  applyChangesOnPan,
  cursorStyleHandler,
} from '/src/components/toolkit/pan/panUtil.js'
import MouseButtons from '/src/components/modules/mouseButtons.js'
import Store from '/src/Store/Store.js'
import PressedState from '/src/store/state/panState.js'

const pan = {
  init(img) {
    function removeEvent() {
      guideLineCanvas.removeEventListener('mousemove', onMouseMove)
    }

    function onMouseMove(e) {
      guideLineCanvas.style.cursor = 'grabbing'
      imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)
      const currentGLCoord = getCanvasMousePosition(e, imgCanvas)

      applyChangesOnPan(currentGLCoord, imgCtx)

      imgCtx.drawImage(
        img,
        Store.coord.img.translation.x,
        Store.coord.img.translation.y,
        Store.coord.img.size.width,
        Store.coord.img.size.height
      )
    }

    function checkPressed() {
      if (PressedState.space && PressedState.mouse) {
        guideLineCanvas.addEventListener('mousemove', onMouseMove)
      }
    }
    function onMouseDown(e) {
      if (e.button === MouseButtons.LEFT) {
        PressedState.mouse = true
        Store.pan.init = getCanvasMousePosition(e, imgCanvas)
        checkPressed()
      }
    }
    function onMouseUp(e) {
      const transform = imgCtx.getTransform()
      if (e.button === MouseButtons.LEFT) {
        PressedState.mouse = false
        Store.pan.moved = { x: transform.e, y: transform.f }
        removeEvent()
      }
    }
    function onKeyDown(e) {
      if (e.code === 'Space') {
        PressedState.space = true
        cursorStyleHandler(guideLineCanvas)
        checkPressed()
      }
    }
    function onKeyUp(e) {
      if (e.code === 'Space') {
        PressedState.space = false
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
