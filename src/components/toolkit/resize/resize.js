import { applyChangesOnResize } from '/src/components/toolkit/resize/resizeUtil.js'
import { imgCanvas, imgCtx } from '/src/components/canvas/canvasExport.js'
import {
  resizeHandlerEl,
  classSelectorEl,
  annotatorEl,
  mainEl,
} from '/src/components/modules/getElement.js'

export default function applyResize(img) {
  function resizeCanvas() {
    applyChangesOnResize(img, imgCanvas, imgCtx)
  }
  const resizeObserver = new ResizeObserver(resizeCanvas)
  resizeHandlerEl.addEventListener('mousedown', onMouseDown)
  window.addEventListener('resize', onResize)

  function onResize() {
    resizeCanvas()
  }

  function onMouseDown(e) {
    if (e.button === 0) {
      mainEl.addEventListener('mousemove', onMouseMove)
      mainEl.addEventListener('mouseup', onMouseUp)
      resizeObserver.observe(imgCanvas)

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
          const width = `${Math.round(x)}px`
          classSelectorEl.style.width = width
          annotatorEl.style.width = width
        }
      }

      function onMouseUp() {
        mainEl.removeEventListener('mousemove', onMouseMove)
        mainEl.removeEventListener('mouseup', onMouseUp)
        resizeObserver.unobserve(imgCanvas)
      }
    }
  }
}
