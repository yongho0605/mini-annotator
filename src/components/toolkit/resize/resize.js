import { applyChangesOnResize } from '/src/components/toolkit/resize/resizeUtil.js'
import {
  imgCanvas,
  imgCtx,
  guideLineCanvas,
} from '/src/components/canvas/canvasExport.js'
import {
  resizeHandlerEl,
  classSelectorEl,
  annotatorEl,
  mainEl,
} from '/src/components/modules/elements.js'

const guideLineCanvasWidth = guideLineCanvas.clientWidth
const resize = {
  init: (img) => {
    imgCanvas.width = imgCanvas.clientWidth
    imgCanvas.height = imgCanvas.clientHeight
    applyChangesOnResize(img, imgCanvas, imgCtx)
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
            classSelectorEl.style.width = `${x}px`
            annotatorEl.style.width = `${x}px`
            guideLineCanvas.style.width = `${guideLineCanvasWidth}px`
          }
        }

        function onMouseUp() {
          mainEl.removeEventListener('mousemove', onMouseMove)
          mainEl.removeEventListener('mouseup', onMouseUp)
          resizeObserver.unobserve(imgCanvas)
        }
      }
    }
  },
}

export default resize
