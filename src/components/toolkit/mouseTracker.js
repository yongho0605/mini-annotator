import CoordStore from '/src/store/coordStore.js'
import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  imgCanvas as canvas,
  imgCtx as ctx,
} from '/src/components/canvas/canvasExport.js'
import {
  annotatorEl,
  coordinateIndex,
} from '/src/components/modules/elements.js'

export default function chaseWholeCanvasCoordinate(img) {
  annotatorEl.addEventListener('mousemove', onMouseMove)
  function onMouseMove(e) {
    const { width: imgWidth, height: imgHeight } = img
    const transform = ctx.getTransform()
    const { x, y } = getCanvasMousePosition(e, canvas)
    const fixedSecondDecimalPoint = (computedValue) =>
      Number(computedValue.toFixed(2))

    CoordStore.canvas.x = x
    CoordStore.canvas.y = y
    CoordStore.imgOnCanvas.x = fixedSecondDecimalPoint(
      CoordStore.canvas.x - CoordStore.imgTranslate.x
    )
    CoordStore.imgOnCanvas.y = fixedSecondDecimalPoint(
      CoordStore.canvas.y - CoordStore.imgTranslate.y
    )
    CoordStore.canvasTranslate.x = fixedSecondDecimalPoint(transform.e)
    CoordStore.canvasTranslate.y = fixedSecondDecimalPoint(transform.f)
    CoordStore.canvasScale.x = fixedSecondDecimalPoint(transform.a)
    CoordStore.canvasScale.y = fixedSecondDecimalPoint(transform.d)
    CoordStore.imgScale.x = fixedSecondDecimalPoint(
      (canvas.width * transform.a) / imgWidth
    )
    CoordStore.imgScale.y = fixedSecondDecimalPoint(
      (canvas.height * transform.d) / imgHeight
    )
    CoordStore.naturalImgSize.width = imgWidth
    CoordStore.naturalImgSize.height = imgHeight

    coordinateIndex.innerHTML = `
    <li>canvas:(${CoordStore.canvas.x}, ${CoordStore.canvas.y})</li>
    <li>imgOnCanvas:(${CoordStore.imgOnCanvas.x}, ${CoordStore.imgOnCanvas.y})</li>
    <li>canvasTranslate:(${CoordStore.canvasTranslate.x}, ${CoordStore.canvasTranslate.y})</li>
    <li>imgTranslate:(${CoordStore.imgTranslate.x}, ${CoordStore.imgTranslate.y})</li>
    <li>scaledImgTranslate: (${CoordStore.scaledImgTranslate.x}, ${CoordStore.scaledImgTranslate.y})</li>
    <li>canvasScale:(${CoordStore.canvasScale.x}, ${CoordStore.canvasScale.y})</li>
    <li>imgScale: (${CoordStore.imgScale.x}, ${CoordStore.imgScale.y})</li>
    <li>ImgSize width: ${CoordStore.imgSize.width} height: ${CoordStore.imgSize.height}</li>
    <li>scaledImgSize width: ${CoordStore.scaledImgSize.width} height: ${CoordStore.scaledImgSize.height}</li>
    <li>naturalImgSize width: ${CoordStore.naturalImgSize.width} height: ${CoordStore.naturalImgSize.height}</li>
    `
  }
}
