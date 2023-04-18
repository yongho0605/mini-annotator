import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  guideLineCanvas as canvas,
  guideLineCtx as ctx,
} from '/src/components/canvas/canvasExport.js'

export default function applyGuideLine() {
  // guideLine module init 느낌으로 가져가면 좋음
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mouseleave', onMouseLeave)
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
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}
