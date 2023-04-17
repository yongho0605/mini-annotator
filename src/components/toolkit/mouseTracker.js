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
    CoordStore.canvas.scale.x = fixedSecondDecimalPoint(transform.a)
    CoordStore.canvas.scale.y = fixedSecondDecimalPoint(transform.d)
    CoordStore.img.scale.x = fixedSecondDecimalPoint(
      (canvas.width * transform.a) / imgWidth
    )
    CoordStore.img.scale.y = fixedSecondDecimalPoint(
      (canvas.height * transform.d) / imgHeight
    )
    CoordStore.img.naturalSize.width = imgWidth
    CoordStore.img.naturalSize.height = imgHeight

    coordinateIndex.innerHTML = `
    <li>canvas.guideLine:(${CoordStore.canvas.guideLine.x}, ${CoordStore.canvas.guideLine.y})</li>
    <li>img.guideLine:(${CoordStore.img.guideLine.x}, ${CoordStore.img.guideLine.y})</li>
    <li>canvas.translation:(${CoordStore.canvas.translation.x}, ${CoordStore.canvas.translation.y})</li>
    <li>img.translation:(${CoordStore.img.translation.x}, ${CoordStore.img.translation.y})</li>
    <li>img.scaledTranslation: (${CoordStore.img.scaledTranslation.x}, ${CoordStore.img.scaledTranslation.y})</li>
    <li>canvas.scale:(${CoordStore.canvas.scale.x}, ${CoordStore.canvas.scale.y})</li>
    <li>img.scale: (${CoordStore.img.scale.x}, ${CoordStore.img.scale.y})</li>
    <li>img.size width: ${CoordStore.img.size.width} height: ${CoordStore.img.size.height}</li>
    <li>img.scaledSize width: ${CoordStore.img.scaledSize.width} height: ${CoordStore.img.scaledSize.height}</li>
    <li>img.naturalSize width: ${CoordStore.img.naturalSize.width} height: ${CoordStore.img.naturalSize.height}</li>
    `
  }
}
