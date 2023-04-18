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
    const scale = transform.a
    const { x, y } = getCanvasMousePosition(e, canvas)
    const fixedSecondDecimalPoint = (computedValue) =>
      Number(computedValue.toFixed(2))

    CoordStore.canvas.guideLine.x = x
    CoordStore.canvas.guideLine.y = y
    CoordStore.img.guideLine.x = fixedSecondDecimalPoint(
      CoordStore.canvas.guideLine.x - CoordStore.img.translation.x
    )
    CoordStore.img.guideLine.y = fixedSecondDecimalPoint(
      CoordStore.canvas.guideLine.y - CoordStore.img.translation.y
    )
    CoordStore.canvas.translation.x = fixedSecondDecimalPoint(transform.e)
    CoordStore.canvas.translation.y = fixedSecondDecimalPoint(transform.f)
    CoordStore.canvas.scale.x = fixedSecondDecimalPoint(scale)
    CoordStore.canvas.scale.y = fixedSecondDecimalPoint(scale)
    CoordStore.img.scale.x = fixedSecondDecimalPoint(
      (canvas.width * scale) / imgWidth
    )
    CoordStore.img.scale.y = fixedSecondDecimalPoint(
      (canvas.height * scale) / imgHeight
    )
    CoordStore.img.scaledSize.width = fixedSecondDecimalPoint(
      CoordStore.img.size.width * scale
    )
    CoordStore.img.scaledSize.height = fixedSecondDecimalPoint(
      CoordStore.img.size.height * scale
    )
    CoordStore.img.naturalSize.width = imgWidth
    CoordStore.img.naturalSize.height = imgHeight

    coordinateIndex.innerHTML = `
    <li>canvasGuideLine:(${CoordStore.canvas.guideLine.x}, ${CoordStore.canvas.guideLine.y})</li>
    <li>imgGuideLine:(${CoordStore.img.guideLine.x}, ${CoordStore.img.guideLine.y})</li>
    <li>canvasTranslation:(${CoordStore.canvas.translation.x}, ${CoordStore.canvas.translation.y})</li>
    <li>imgTranslation:(${CoordStore.img.translation.x}, ${CoordStore.img.translation.y})</li>
    <li>imgScaledTranslation: (${CoordStore.img.scaledTranslation.x}, ${CoordStore.img.scaledTranslation.y})</li>
    <li>canvasScale:(${CoordStore.canvas.scale.x}, ${CoordStore.canvas.scale.y})</li>
    <li>imgScale: (${CoordStore.img.scale.x}, ${CoordStore.img.scale.y})</li>
    <li>imgSize width: ${CoordStore.img.size.width} height: ${CoordStore.img.size.height}</li>
    <li>imgScaledSize width: ${CoordStore.img.scaledSize.width} height: ${CoordStore.img.scaledSize.height}</li>
    <li>imgNaturalSize width: ${CoordStore.img.naturalSize.width} height: ${CoordStore.img.naturalSize.height}</li>
    `
  }
}
