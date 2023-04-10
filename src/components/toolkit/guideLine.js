import CoordStore from '/src/store/coordStore.js'
import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  guideLineCanvas,
  guideLineCtx,
} from '/src/components/canvas/canvasExport.js'
import guideLine from '/src/components/modules/guideLine.js'

export function applyGuideLine() {
  guideLineCanvas.addEventListener('mousemove', onMouseMove)
  guideLineCanvas.addEventListener('mouseleave', onMouseLeave)
  const canvasWidth = guideLineCanvas.width
  const canvasHeight = guideLineCanvas.height
  function onMouseMove(e) {
    const mousePos = getCanvasMousePosition(e, guideLineCanvas)
    const rect = guideLineCanvas.getBoundingClientRect()

    const size = {
      canvas: {
        width: canvasWidth,
        height: canvasHeight,
      },
      rect: {
        width: rect.width,
        height: rect.height,
      },
    }
    const crossLine = guideLine.getWidth(size)

    clearCanvas()
    guideLine.draw(guideLineCtx, mousePos, size, crossLine)

    CoordStore.DOM.x = e.clientX
    CoordStore.DOM.y = e.clientY
    CoordStore.canvas.x = mousePos.x
    CoordStore.canvas.y = mousePos.y
  }

  function onMouseLeave() {
    clearCanvas()
  }

  function clearCanvas() {
    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight)
  }
}
