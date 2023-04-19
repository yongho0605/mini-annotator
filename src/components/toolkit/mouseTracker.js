import store from '/src/store/store.js'
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

    store.canvas.guideLine.x = x
    store.canvas.guideLine.y = y
    store.img.guideLine.x = fixedSecondDecimalPoint(
      store.canvas.guideLine.x - store.img.translation.x
    )
    store.img.guideLine.y = fixedSecondDecimalPoint(
      store.canvas.guideLine.y - store.img.translation.y
    )
    store.canvas.translation.x = fixedSecondDecimalPoint(transform.e)
    store.canvas.translation.y = fixedSecondDecimalPoint(transform.f)
    store.img.scale.x = fixedSecondDecimalPoint(
      (canvas.width * scale) / imgWidth
    )
    store.img.scale.y = fixedSecondDecimalPoint(
      (canvas.height * scale) / imgHeight
    )
    store.img.scaledSize.width = fixedSecondDecimalPoint(
      store.img.size.width * scale
    )
    store.img.scaledSize.height = fixedSecondDecimalPoint(
      store.img.size.height * scale
    )
    store.img.naturalSize.width = imgWidth
    store.img.naturalSize.height = imgHeight

    coordinateIndex.innerHTML = `
    <li>canvasGuideLine:(${store.canvas.guideLine.x}, ${store.canvas.guideLine.y})</li>
    <li>imgGuideLine:(${store.img.guideLine.x}, ${store.img.guideLine.y})</li>
    <li>canvasTranslation:(${store.canvas.translation.x}, ${store.canvas.translation.y})</li>
    <li>imgTranslation:(${store.img.translation.x}, ${store.img.translation.y})</li>
    <li>imgScaledTranslation: (${store.img.scaledTranslation.x}, ${store.img.scaledTranslation.y})</li>
    <li>canvasScale: ${store.zoom.scale.current}</li>
    <li>imgScale: (${store.img.scale.x}, ${store.img.scale.y})</li>
    <li>imgSize width: ${store.img.size.width} height: ${store.img.size.height}</li>
    <li>imgScaledSize width: ${store.img.scaledSize.width} height: ${store.img.scaledSize.height}</li>
    <li>imgNaturalSize width: ${store.img.naturalSize.width} height: ${store.img.naturalSize.height}</li>
    `
  }
}
