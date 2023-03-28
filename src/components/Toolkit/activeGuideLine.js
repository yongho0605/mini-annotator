import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  guideLineCanvas,
  guideLineCtx,
} from '/src/components/canvas/canvasExport.js'
import {
  getGuideLineWidth,
  drawGuideLine,
} from '/src/components/modules/getGuideLineFunction.js'

export default function activeGuideLine() {
  guideLineCanvas.addEventListener('mousemove', onMouseMove)
  guideLineCanvas.addEventListener('mouseleave', onMouseLeave)
  const canvasWidth = guideLineCanvas.width
  const canvasHeight = guideLineCanvas.height

  function onMouseMove(e) {
    const mousePos = getCanvasMousePosition(e, guideLineCanvas)
    const { x, y } = mousePos

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

    const coordinate = { x, y }
    const crossLine = getGuideLineWidth(size)

    clearCanvas()
    drawGuideLine(guideLineCtx, coordinate, size, crossLine)
  }

  function onMouseLeave() {
    clearCanvas()
  }

  function clearCanvas() {
    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight)
  }
}
