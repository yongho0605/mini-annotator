import Store from '/src/store/store.js'
import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  imgCanvas,
  guideLineCanvas,
  imgCtx,
} from '/src/components/canvas/canvasExport.js'
import { applyChangesOnTranslate } from '/src/components/toolkit/utils/common/zoomUtil.js'

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

      Store.pan.movedArr.length = 0
      applyChangesOnTranslate(e, scale, mouseCoordArr, currentGLCoord, imgCtx)

      imgCtx.drawImage(
        img,
        Store.img.translation.x,
        Store.img.translation.y,
        Store.img.size.width,
        Store.img.size.height
      )
    }

    guideLineCanvas.addEventListener('wheel', onWheel)
  },
}
export default zoom
