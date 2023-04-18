import Store from '/src/Store/Store.js'
import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  imgCanvas,
  guideLineCanvas,
  imgCtx,
} from '/src/components/canvas/canvasExport.js'
import { applyChangesOnTranslate } from '/src/components/toolkit/zoom/zoomUtil.js'

const zoom = {
  init(img) {
    const imgWidth = img.naturalWidth
    const imgHight = img.naturalHeight
    const imgSizeCondition = imgWidth < 10 && imgHight < 10
    const maxLimitScale = imgWidth > imgHight ? imgWidth / 10 : imgHight / 10
    const mouseCoordArr = []
    const scale = {
      min: imgSizeCondition ? 0.5 : 0.05,
      max: imgSizeCondition ? 1 : maxLimitScale,
      factor: null,
    }
    function onWheel(e) {
      scale.factor = e.deltaY > 0 ? 0.9 : 1.1
      const currentGLCoord = getCanvasMousePosition(e, imgCanvas)
      imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)

      applyChangesOnTranslate(e, scale, mouseCoordArr, currentGLCoord, imgCtx)

      imgCtx.drawImage(
        img,
        Store.coord.img.translation.x,
        Store.coord.img.translation.y,
        Store.coord.img.size.width,
        Store.coord.img.size.height
      )
    }

    guideLineCanvas.addEventListener('wheel', onWheel)
  },
}
export default zoom
