import getCanvasMousePosition from '/src/components/canvas/getCanvasMousePosition.js'
import {
  guideLineCanvas,
  guideLineCtx,
} from '/src/components/canvas/canvasExport.js'
import getGuideLineWidth from '/src/components/modules/getGuideLineWidth.js'

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

    const verticalGuideLine = getGuideLineWidth(widthLine)
    const horizontalGuideLine = getGuideLineWidth(heightLine)

    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight)
    guideLineCtx.beginPath()
    guideLineCtx.lineWidth = horizontalGuideLine
    guideLineCtx.moveTo(0, y)
    guideLineCtx.lineTo(canvasWidth, y)
    guideLineCtx.stroke()

    guideLineCtx.beginPath()
    guideLineCtx.lineWidth = verticalGuideLine
    guideLineCtx.moveTo(x, 0)
    guideLineCtx.lineTo(x, canvasHeight)
    guideLineCtx.closePath()
    guideLineCtx.stroke()
  }

  function mouseleave() {
    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight)
  }
}
