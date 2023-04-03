import ImgStore from '/src/store/imgStore.js'
import CoordStore from '/src/store/coordStore.js'
import { imgCanvas, imgCtx } from '/src/components/canvas/canvasExport.js'
import {
  annotatorEl,
  coordinateIndex,
} from '/src/components/modules/getElement.js'
import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'

export default function chaseCoordinate() {
  annotatorEl.addEventListener('mousemove', onMouseMove)
  function onMouseMove(e) {
    const coordOnCanvas = getCanvasMousePosition(e, imgCanvas)
    const { width: imgWidth, height: imgHeight } = ImgStore.source
    const transform = imgCtx.getTransform()

    function removeFloatingPoint(num) {
      return Number(num.toFixed(2))
    }

    CoordStore.DOM.x = e.clientX
    CoordStore.DOM.y = e.clientY
    CoordStore.canvas.x = coordOnCanvas.x
    CoordStore.canvas.y = coordOnCanvas.y
    CoordStore.canvasOnImg.x = coordOnCanvas.x - CoordStore.imgTranslate.x
    CoordStore.canvasOnImg.y = coordOnCanvas.y - CoordStore.imgTranslate.y
    CoordStore.canvasTranslate.x = removeFloatingPoint(transform.e)
    CoordStore.canvasTranslate.y = removeFloatingPoint(transform.f)
    CoordStore.canvasScale.x = removeFloatingPoint(transform.a)
    CoordStore.canvasScale.y = removeFloatingPoint(transform.d)
    CoordStore.imgScale.x = removeFloatingPoint(
      (imgCanvas.width * transform.a) / imgWidth
    )
    CoordStore.imgScale.y = removeFloatingPoint(
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
    <li>canvasImgSize width:${CoordStore.canvasImgSize.width} height:${CoordStore.canvasImgSize.height}</li>
    <li>naturalImgSize width:${CoordStore.naturalImgSize.width} height:${CoordStore.naturalImgSize.height}</li>
    `
  }
}
