import CoordStore from '/src/store/coordStore.js'
import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import { imgCanvas, guideLineCanvas, imgCtx } from '/src/components/canvas/canvasExport.js'
import { applyChangesOnTranslate } from '/src/components/toolkit/zoom/zoomUtil.js'

export default function applyZoom(img) {
  const mouseCoordArr = []
  const computedGLCoord = { x: null, y: null }
  const scale = {
    before: 1,
    current: 1,
    min: 0.1,
    max: 100,
    factor: null,
  }

  function onWheel(e) {
    scale.factor = e.deltaY > 0 ? 0.9 : 1.1
    const currentGLCoord = getCanvasMousePosition(e, imgCanvas)
    const coordCollection = { mouseCoordArr, computedGLCoord, currentGLCoord }
    imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)

    applyChangesOnTranslate(e, scale, coordCollection, imgCtx)

    imgCtx.drawImage(
      img,
      CoordStore.img.translation.x,
      CoordStore.img.translation.y,
      CoordStore.img.size.width,
      CoordStore.img.size.height
    )
  }

  guideLineCanvas.addEventListener('wheel', onWheel)
}
