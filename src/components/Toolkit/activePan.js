import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  guideLineCanvas,
  imageCtx,
} from '/src/components/canvas/canvasExport.js'
import usePan from '/src/store/usePan.js'

export default function panning(img) {
  function removeEvent() {
    guideLineCanvas.removeEventListener('mousemove', onMouseMove)
  }

  function onMouseMove(e) {
    imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
    const { x, y } = getCanvasMousePosition(e, guideLineCanvas)
  }

  function checkPressed() {
    if (usePan.spacePressed && usePan.mousePressed) {
      guideLineCanvas.addEventListener('mousemove', onMouseMove)

      usePan.spacePressed = false
      usePan.mousePressed = false
    }
  }

  function onKeyPress(e) {
    if (e.keyCode === 32) {
      usePan.spacePressed = true
      checkPressed()
    }
  }

  function onKeyUp(e) {
    if (e.keyCode === 32) {
      usePan.spacePressed = false
      removeEvent()
    }
  }

  function onMouseDown(e) {
    if (e.button === 0) {
      usePan.mousePressed = true
      checkPressed()
    }
  }

  function onMouseUp(e) {
    if (e.button === 0) {
      usePan.mousePressed = false
      removeEvent()
    }
  }

  window.addEventListener('keypress', onKeyPress)
  window.addEventListener('keyup', onKeyUp)
  guideLineCanvas.addEventListener('mousedown', onMouseDown)
  guideLineCanvas.addEventListener('mouseup', onMouseUp)
}
