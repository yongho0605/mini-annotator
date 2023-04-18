import Store from '/src/Store/Store.js'
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

    Store.coord.canvas.guideLine.x = x
    Store.coord.canvas.guideLine.y = y
    Store.coord.img.guideLine.x = fixedSecondDecimalPoint(
      Store.coord.canvas.guideLine.x - Store.coord.img.translation.x
    )
    Store.coord.img.guideLine.y = fixedSecondDecimalPoint(
      Store.coord.canvas.guideLine.y - Store.coord.img.translation.y
    )
    Store.coord.canvas.translation.x = fixedSecondDecimalPoint(transform.e)
    Store.coord.canvas.translation.y = fixedSecondDecimalPoint(transform.f)
    Store.coord.canvas.scale.x = fixedSecondDecimalPoint(scale)
    Store.coord.canvas.scale.y = fixedSecondDecimalPoint(scale)
    Store.coord.img.scale.x = fixedSecondDecimalPoint(
      (canvas.width * scale) / imgWidth
    )
    Store.coord.img.scale.y = fixedSecondDecimalPoint(
      (canvas.height * scale) / imgHeight
    )
    Store.coord.img.scaledSize.width = fixedSecondDecimalPoint(
      Store.coord.img.size.width * scale
    )
    Store.coord.img.scaledSize.height = fixedSecondDecimalPoint(
      Store.coord.img.size.height * scale
    )
    Store.coord.img.naturalSize.width = imgWidth
    Store.coord.img.naturalSize.height = imgHeight

    coordinateIndex.innerHTML = `
    <li>canvasGuideLine:(${Store.coord.canvas.guideLine.x}, ${Store.coord.canvas.guideLine.y})</li>
    <li>imgGuideLine:(${Store.coord.img.guideLine.x}, ${Store.coord.img.guideLine.y})</li>
    <li>canvasTranslation:(${Store.coord.canvas.translation.x}, ${Store.coord.canvas.translation.y})</li>
    <li>imgTranslation:(${Store.coord.img.translation.x}, ${Store.coord.img.translation.y})</li>
    <li>imgScaledTranslation: (${Store.coord.img.scaledTranslation.x}, ${Store.coord.img.scaledTranslation.y})</li>
    <li>canvasScale:(${Store.coord.canvas.scale.x}, ${Store.coord.canvas.scale.y})</li>
    <li>imgScale: (${Store.coord.img.scale.x}, ${Store.coord.img.scale.y})</li>
    <li>imgSize width: ${Store.coord.img.size.width} height: ${Store.coord.img.size.height}</li>
    <li>imgScaledSize width: ${Store.coord.img.scaledSize.width} height: ${Store.coord.img.scaledSize.height}</li>
    <li>imgNaturalSize width: ${Store.coord.img.naturalSize.width} height: ${Store.coord.img.naturalSize.height}</li>
    `
  }
}
