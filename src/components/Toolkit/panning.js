import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  guideLineCanvas,
  imageCtx,
} from '/src/components/canvas/canvasExport.js'
import usePan from '/src/store/usePan.js'

export default function panning(img) {
  function removeEvent() {
    guideLineCanvas.removeEventListener('mousemove', mousemove)
  }

  function mousemove(e) {
    imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
    const mousePos = getCanvasMousePosition(e, guideLineCanvas)
    const x = mousePos.x
    const y = mousePos.y
    const sqrtX = Math.sqrt(
      guideLineCanvas.width ** 2 + guideLineCanvas.height ** 2
    )
    imageCtx.drawImage(img, x - sqrtX / 2, y - sqrtX / 2)
  }

  function checkPressed() {
    if (usePan.spacePressed && usePan.mousePressed) {
      guideLineCanvas.addEventListener('mousemove', mousemove)

      usePan.spacePressed = false
      usePan.mousePressed = false
    }
  }

  function keypress(e) {
    if (e.keyCode === 32) {
      usePan.spacePressed = true
      checkPressed()
    }
  }

  function keyup(e) {
    if (e.keyCode === 32) {
      usePan.spacePressed = false
      removeEvent()
    }
  }

  function mousedown(e) {
    if (e.button === 0) {
      usePan.mousePressed = true
      checkPressed()
    }
  }

  function mouseup(e) {
    if (e.button === 0) {
      usePan.mousePressed = false
      removeEvent()
    }
  }

  window.addEventListener('keypress', keypress)
  window.addEventListener('keyup', keyup)
  guideLineCanvas.addEventListener('mousedown', mousedown)
  guideLineCanvas.addEventListener('mouseup', mouseup)
}
