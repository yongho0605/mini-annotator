import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  guideLineCanvas,
  imgCtx,
  imgCanvas,
} from '/src/components/canvas/canvasExport.js'
import { applyChangesOnPan } from '/src/components/toolkit/pan/panUtil.js'
import PanStore from '/src/store/panStore.js'
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

    applyChangesOnPan(currentGLCoord, imgCtx)

    imgCtx.drawImage(
      img,
      CoordStore.img.translation.x,
      CoordStore.img.translation.y,
      CoordStore.img.size.width,
      CoordStore.img.size.height
    )
  }

  const pressedState = { space: false, mouse: false }
  function checkPressed() {
    console.log('엄청나게 실행 될 것 같은데')
    if (pressedState.space && pressedState.mouse) {
      guideLineCanvas.addEventListener('mousemove', onMouseMove)
    }
  }

  function onMouseDown(e) {
    if (e.button === MouseButtons.LEFT) {
      pressedState.mouse = true
      PanStore.init = getCanvasMousePosition(e, imgCanvas)
      checkPressed()
    }
  }

  function onMouseUp(e) {
    const transform = imgCtx.getTransform()
    if (e.button === MouseButtons.LEFT) {
      pressedState.mouse = false
      PanStore.moved = { x: transform.e, y: transform.f }
      removeEvent()
    }
  }

  function onKeyDown(e) {
    if (e.code === 'Space') {
      pressedState.space = true
      pressedState.mouse
        ? (guideLineCanvas.style.cursor = 'grabbing')
        : (guideLineCanvas.style.cursor = 'grab')
      checkPressed()
    }
  }

  function onKeyUp(e) {
    if (e.code === 'Space') {
      pressedState.space = false
      guideLineCanvas.style.cursor = 'auto'
      removeEvent()
    }
  }

  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
  guideLineCanvas.addEventListener('mousedown', onMouseDown)
  guideLineCanvas.addEventListener('mouseup', onMouseUp)
}
