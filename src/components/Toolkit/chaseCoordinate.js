import CoordStore from '/src/store/coordStore.js'
import { imgCanvas, imgCtx } from '/src/components/canvas/canvasExport.js'
import {
  annotatorEl,
  coordinateIndex,
} from '/src/components/modules/getElement.js'

export default function chaseCoordinate(img) {
  annotatorEl.addEventListener('mousemove', onMouseMove)
  function onMouseMove() {
    const { width: imgWidth, height: imgHeight } = img
    const transform = imgCtx.getTransform()

    const roundFloatingPoint_2 = (num) => Number(num.toFixed(2))

    CoordStore.canvasOnImg.x = CoordStore.canvas.x - CoordStore.imgTranslate.x
    CoordStore.canvasOnImg.y = CoordStore.canvas.y - CoordStore.imgTranslate.y
    CoordStore.canvasTranslate.x = roundFloatingPoint_2(transform.e)
    CoordStore.canvasTranslate.y = roundFloatingPoint_2(transform.f)
    CoordStore.canvasScale.x = roundFloatingPoint_2(transform.a)
    CoordStore.canvasScale.y = roundFloatingPoint_2(transform.d)
    CoordStore.imgScale.x = roundFloatingPoint_2(
      (imgCanvas.width * transform.a) / imgWidth
    )
    CoordStore.imgScale.y = roundFloatingPoint_2(
      (imgCanvas.height * transform.d) / imgHeight
    )
    CoordStore.naturalImgSize.width = imgWidth
    CoordStore.naturalImgSize.height = imgHeight

    coordinateIndex.innerHTML = `
    <li>client:(${CoordStore.DOM.x}, ${CoordStore.DOM.y})</li>
    <li>canvas:(${CoordStore.canvas.x}, ${CoordStore.canvas.y})</li>
    <li>canvasOnImg:(${CoordStore.canvasOnImg.x}, ${CoordStore.canvasOnImg.y})</li>
    <li>canvasTranslate:(${CoordStore.canvasTranslate.x}, ${CoordStore.canvasTranslate.y})</li>
    <li>imgTranslate:(${CoordStore.imgTranslate.x}, ${CoordStore.imgTranslate.y})</li>
    <li>canvasScale:(${CoordStore.canvasScale.x}, ${CoordStore.canvasScale.y})</li>
    <li>imgScale: (${CoordStore.imgScale.x}, ${CoordStore.imgScale.y})</li>
    <li>ImgSize width: ${CoordStore.imgSize.width} height: ${CoordStore.imgSize.height}</li>
    <li>naturalImgSize width: ${CoordStore.naturalImgSize.width} height: ${CoordStore.naturalImgSize.height}</li>
    `
  }
}
