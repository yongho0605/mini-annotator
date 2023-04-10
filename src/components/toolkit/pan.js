import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import { guideLineCanvas, imgCtx } from '/src/components/canvas/canvasExport.js'
import PanState from '/src/store/panState.js'
import MouseButtons from '/src/components/modules/mouseButtons.js'

export default function panning(img) {
  function removeEvent() {
    guideLineCanvas.removeEventListener('mousemove', onMouseMove)
  }

  function onMouseMove(e) {
    imgCtx.clearRect(0, 0, imgCanvas.width, imgCanvas.height)
    const { x, y } = getCanvasMousePosition(e, guideLineCanvas)
  }

  function checkPressed() {
    if (PanState.spacePressed && PanState.mousePressed) {
      guideLineCanvas.addEventListener('mousemove', onMouseMove)
      PanState.spacePressed = false
      PanState.mousePressed = false
    }
  }

  function onKeyPress(e) {
    if (e.code === 'Space') {
      PanState.spacePressed = true
      checkPressed()
    }
  }

  function onKeyUp(e) {
    if (e.code === 'Space') {
      PanState.spacePressed = false
      removeEvent()
    }
  }

  function onMouseDown(e) {
    if (e.button === MouseButtons.LEFT) {
      PanState.mousePressed = true
      checkPressed()
    }
  }

  function onMouseUp(e) {
    if (e.button === MouseButtons.LEFT) {
      PanState.mousePressed = false
      removeEvent()
    }
  }

  window.addEventListener('keypress', onKeyPress)
  window.addEventListener('keyup', onKeyUp)
  guideLineCanvas.addEventListener('mousedown', onMouseDown)
  guideLineCanvas.addEventListener('mouseup', onMouseUp)
}
