import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  imgCanvas,
  guideLineCanvas,
  imgCtx,
} from '/src/components/canvas/canvasExport.js'
import CoordStore from '/src/store/coordStore.js'

export default function activeZoom(img) {
  function roundFloatingPoint_2(num) {
    return Number(num.toFixed(2))
  }
  function wheel(e) {
    const { x, y } = getCanvasMousePosition(e, guideLineCanvas)
    const minScale = 0.05
    const maxScale = 30
    let scale = e.deltaY > 0 ? 0.9 : 1.1
    const imgTransform = imgCtx.getTransform()
    const imgScaleX = roundFloatingPoint_2(imgTransform.a)

    imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)

    if (imgScaleX < minScale && scale === 0.9) {
      scale = 1
    } else if (imgScaleX > maxScale && scale === 1.1) {
      scale = 1
    }

    imgCtx.translate(x, y)
    console.log(imgTransform.e)
    imgCtx.scale(scale, scale)
    console.log(imgTransform.f)
    imgCtx.translate(-x, -y)

    imgCtx.drawImage(
      img,
      CoordStore.imgTranslate.x,
      CoordStore.imgTranslate.y,
      CoordStore.canvasImgSize.width,
      CoordStore.canvasImgSize.height
    )
  }
  guideLineCanvas.addEventListener('wheel', wheel)
}
