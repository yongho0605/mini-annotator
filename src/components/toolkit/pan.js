import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  guideLineCanvas,
  imgCtx,
  imgCanvas,
} from '/src/components/canvas/canvasExport.js'
import PanState from '/src/store/panState.js'
import MouseButtons from '/src/components/modules/mouseButtons.js'
import CoordStore from '/src/store/coordStore.js'

export default function applyPan(img) {
  function removeEvent() {
    guideLineCanvas.removeEventListener('mousemove', onMouseMove)
  }

  const panedPosition = {
    init: 0,
    moved: 0,
  }

  function onMouseMove(e) {
    guideLineCanvas.style.cursor = 'grabbing'
    imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)
    const { imgTranslate, imgSize, canvasScale } = CoordStore
    const { x, y } = getCanvasMousePosition(e, imgCanvas)

    imgCtx.setTransform(canvasScale.x, 0, 0, canvasScale.y, x, y)

    imgCtx.drawImage(
      img,
      imgTranslate.x,
      imgTranslate.y,
      imgSize.width,
      imgSize.height
    )
  }

  function checkPressed() {
    if (PanState.spacePressed && PanState.mousePressed) {
      guideLineCanvas.style.cursor = 'grabbing'
      guideLineCanvas.addEventListener('mousemove', onMouseMove)
      PanState.spacePressed = false
      PanState.mousePressed = false
    }
  }

  function onMouseDown(e) {
    if (e.button === MouseButtons.LEFT) {
      PanState.mousePressed = true
      const { x, y } = getCanvasMousePosition(e, imgCanvas)
      checkPressed()
    }
  }
  function onMouseUp(e) {
    if (e.button === MouseButtons.LEFT) {
      PanState.mousePressed = false
      guideLineCanvas.style.cursor = 'auto'
      removeEvent()
    }
  }
  function onKeyPress(e) {
    if (e.repeat) {
      return
    }
    if (e.code === 'Space') {
      PanState.spacePressed = true
      if (!PanState.mousePressed) {
        guideLineCanvas.style.cursor = 'grab'
      }
      checkPressed()
    }
  }
  function onKeyUp(e) {
    if (e.code === 'Space') {
      PanState.spacePressed = false
      guideLineCanvas.style.cursor = 'auto'
      removeEvent()
    }
  }

  window.addEventListener('keypress', onKeyPress)
  window.addEventListener('keyup', onKeyUp)
  guideLineCanvas.addEventListener('mousedown', onMouseDown)
  guideLineCanvas.addEventListener('mouseup', onMouseUp)
}
