import { applyChangesOnResize } from '/src/components/toolkit/utils/common/resizeUtil.js'
import { canvas, ctx } from '/src/components/canvas/canvasExport.js'
import {
  resizeHandlerEl,
  classSelectorEl,
  annotatorEl,
  mainEl,
} from '/src/modules/elements.js'

const GLCanvasClientWidth = canvas.guideLine.clientWidth
const resize = {
  init: (img) => {
    canvas.img.width = canvas.img.clientWidth
    canvas.img.height = canvas.img.clientHeight
    applyChangesOnResize(img, canvas.img, ctx.img)
  },
  applyAnnotator: (img) => {
    function onResize() {
      resize.init(img)
    }
    const resizeObserver = new ResizeObserver(onResize)
    resizeHandlerEl.addEventListener('mousedown', onMouseDown)
    window.addEventListener('resize', onResize)

    function onMouseDown(e) {
      if (e.button === 0) {
        mainEl.addEventListener('mousemove', onMouseMove)
        mainEl.addEventListener('mouseup', onMouseUp)
        resizeObserver.observe(canvas.img)

        function onMouseMove(e) {
          let x = e.clientX
          const minSize = 250
          const maxSize = Math.floor(screen.width * 0.8)
          if (x < minSize) {
            x = minSize
            return
          } else if (x > maxSize) {
            x = maxSize
            return
          } else {
            classSelectorEl.style.width = `${x}px`
            annotatorEl.style.width = `${x}px`
            canvas.guideLine.style.width = `${GLCanvasClientWidth}px`
          }
        }

        function onMouseUp() {
          mainEl.removeEventListener('mousemove', onMouseMove)
          mainEl.removeEventListener('mouseup', onMouseUp)
          resizeObserver.unobserve(canvas.img)
        }
      }
    }
  },
}

export default resize
