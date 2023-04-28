import Store from '/src/store/store.js'
import { canvas, ctx } from '/src/components/canvas/canvasExport.js'
import { applyChangesOnZoom } from '/src/components/toolkit/utils/common/zoomUtil.js'

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

    function onWheel(evt) {
      scale.factor = evt.deltaY > 0 ? 0.9 : 1.1
      const currentGLCoord = canvas.getMousePos(evt, canvas.img)
      const zoomParameterObj = {
        evt,
        scale,
        mouseCoordArr,
        originCurrentGLCoord: currentGLCoord,
        ctx: ctx.img,
      }

      ctx.img.clearRect(-10, -10, canvas.img.width + 20, canvas.img.height + 20)
      Store.pan.movedArr.length = 0
      applyChangesOnZoom(zoomParameterObj)
      ctx.img.drawImage(
        img,
        Store.img.translation.x,
        Store.img.translation.y,
        Store.img.size.width,
        Store.img.size.height
      )
    }

    canvas.guideLine.addEventListener('wheel', onWheel)
  },
}
export default zoom
