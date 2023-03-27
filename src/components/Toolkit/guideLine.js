import getCanvasMousePosition from '/src/components/canvas/getCanvasMousePosition.js'
import {
  guideLineCanvas,
  guideLineCtx,
} from '/src/components/canvas/canvasExport.js'
import {
  getGuideLineWidth,
  drawGuideLine,
} from '/src/components/modules/getGuideLineFunction.js'

export default function guideLine() {
  guideLineCanvas.addEventListener('mousemove', mousemove)
  guideLineCanvas.addEventListener('mouseleave', mouseleave)
  const canvasWidth = guideLineCanvas.width
  const canvasHeight = guideLineCanvas.height

  function mousemove(e) {
    const mousePos = getCanvasMousePosition(e, guideLineCanvas)
    let x = mousePos.x
    let y = mousePos.y

    const rect = guideLineCanvas.getBoundingClientRect()

    const widthLine = {
      name: 'width',
      canvasWidth: canvasWidth,
      rectWidth: rect.width,
    }

    const heightLine = {
      name: 'height',
      canvasHeight: canvasHeight,
      rectHeight: rect.height,
    }

    const coordinateX = {
      coordinate: 'x',
      x: x,
    }

    const coordinateY = {
      coordinate: 'y',
      y: y,
    }

    const verticalLineWidth = getGuideLineWidth(widthLine)
    const horizontalLineWidth = getGuideLineWidth(heightLine)

    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight)
    drawGuideLine(guideLineCtx, coordinateY, canvasWidth, horizontalLineWidth)
    drawGuideLine(guideLineCtx, coordinateX, canvasHeight, verticalLineWidth)
  }

  function mouseleave() {
    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight)
  }
}
