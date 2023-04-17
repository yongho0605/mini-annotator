import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import { guideLineCanvas as canvas, guideLineCtx as ctx } from '/src/components/canvas/canvasExport.js'

export default function applyGuideLine() {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mouseleave', onMouseLeave)
  const canvasWidth = canvas.width
  const canvasHeight = canvas.height
  function onMouseMove(e) {
    const { x, y } = getCanvasMousePosition(e, canvas)

    clearCanvas()
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvas.height)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(canvas.width, y)
    ctx.stroke()
  }

  function onMouseLeave() {
    clearCanvas()
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  }
}
