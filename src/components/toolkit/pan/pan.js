import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import { guideLineCanvas, imgCtx, imgCanvas } from '/src/components/canvas/canvasExport.js'
import { applyChangesOnPan } from '/src/components/toolkit/pan/panUtil.js'
import PanState from '/src/store/pan/panState.js'
import PanStore from '/src/store/pan/panStore.js'
import MouseButtons from '/src/components/modules/mouseButtons.js'
import CoordStore from '/src/store/coordStore.js'

export default function applyPan(img) {
  function removeEvent() {
    guideLineCanvas.removeEventListener('mousemove', onMouseMove)
  }

  function onMouseMove(e) {
    guideLineCanvas.style.cursor = 'grabbing'
    imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)
    const currentGLCoord = getCanvasMousePosition(e, imgCanvas)

    applyChangesOnPan(PanStore, currentGLCoord, imgCtx)
    imgCtx.drawImage(
      img,
      CoordStore.img.translation.x,
      CoordStore.img.translation.y,
      CoordStore.img.size.width,
      CoordStore.img.size.height
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
      PanStore.init = getCanvasMousePosition(e, imgCanvas)
      checkPressed()
    }
  }

  function onMouseUp(e) {
    const transform = imgCtx.getTransform()
    if (e.button === MouseButtons.LEFT) {
      PanState.mousePressed = false
      guideLineCanvas.style.cursor = 'auto'
      PanStore.moved = { x: transform.e, y: transform.f }
      removeEvent()
    }
  }

  function onKeyDown(e) {
    if (e.code === 'Space') {
      if (!e.repeat) {
        PanState.spacePressed = true
        !PanState.mousePressed && (guideLineCanvas.style.cursor = 'grab')
        checkPressed()
      } else {
        PanState.spacePressed = true
      }
    }
  }

  function onKeyUp(e) {
    if (e.code === 'Space') {
      PanState.spacePressed = false
      guideLineCanvas.style.cursor = 'auto'
      removeEvent()
    }
  }

  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
  guideLineCanvas.addEventListener('mousedown', onMouseDown)
  guideLineCanvas.addEventListener('mouseup', onMouseUp)
}
