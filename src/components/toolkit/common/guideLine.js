import { canvas, ctx } from '/src/components/canvas/canvasExport.js'

const guideLine = {
  init: () => {
    const { guideLine: GLctx } = ctx
    canvas.guideLine.addEventListener('mousemove', onMouseMove)
    canvas.guideLine.addEventListener('mouseleave', onMouseLeave)
    function onMouseMove(e) {
      const { x, y } = canvas.getMousePos(e, canvas.guideLine)

      clearCanvas()
      GLctx.beginPath()
      GLctx.moveTo(x, 0)
      GLctx.lineTo(x, canvas.guideLine.height)
      GLctx.stroke()

      GLctx.beginPath()
      GLctx.moveTo(0, y)
      GLctx.lineTo(canvas.guideLine.width, y)
      GLctx.stroke()
    }

    function onMouseLeave() {
      clearCanvas()
    }

    function clearCanvas() {
      GLctx.clearRect(0, 0, canvas.guideLine.width, canvas.guideLine.height)
    }
  },
}
export default guideLine
