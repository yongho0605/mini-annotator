import { image } from '/src/store/image.js'
import { imageCanvas, imageCtx } from '/src/components/canvas/canvasExport.js'
import {
  annotatorEl,
  coordinateIndex,
  DOMEl,
  canvasEl,
  canvasOnImageEl,
  canvasTranslateEl,
  imageTranslateEl,
  canvasScaleEl,
  canvasImageSize,
  naturalImageSize,
} from '/src/components/modules/getElement.js'
import { coordinate } from '/src/store/coordinate.js'
import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'

export default function chaseCoordinate() {
  annotatorEl.addEventListener('mousemove', onMouseMove)
  const getRoundValue = (value) => Math.round(value)
  function onMouseMove(e) {
    const { x: canvasX, y: canvasY } = getCanvasMousePosition(e, imageCanvas)
    const { width: imgWidth, height: imgHeight } = image.source
    const scaleFactor = Math.min(
      imageCanvas.width / imgWidth,
      imageCanvas.height / imgHeight
    )
    const newImgWidth = getRoundValue(imgWidth * scaleFactor)
    const newImgHeight = getRoundValue(imgHeight * scaleFactor)
    const imageX = (imageCanvas.width - newImgWidth) / 2
    const imageY = (imageCanvas.height - newImgHeight) / 2
    const transform = imageCtx.getTransform()

    let {
      DOM,
      canvas,
      canvasOnImage,
      canvasTranslate,
      imageTranslate,
      canvasScale,
      canvasImageSize,
      naturalImageSize,
    } = coordinate

    DOM.x = e.clientX
    DOM.y = e.clientY
    canvas.x = canvasX
    canvas.y = canvasY
    canvasOnImage.x = canvasX - imageX
    canvasOnImage.y = canvasY - imageY
    canvasTranslate.x = transform.e
    canvasTranslate.y = transform.f
    imageTranslate.x = transform.e + imageX
    imageTranslate.y = transform.f + imageY
    canvasScale.x = transform.a
    canvasScale.y = transform.d
    canvasImageSize.width = newImgWidth
    canvasImageSize.height = newImgHeight
    naturalImageSize.width = imgWidth
    naturalImageSize.height = imgHeight

    coordinateIndex.innerHTML = `
    <li>client:(${DOM.x},${DOM.y})</li>
    <li>canvas:(${canvas.x},${canvas.y})</li>
    <li>canvasOnImage:(${canvasOnImage.x},${canvasOnImage.y})</li>
    <li>canvasTranslate:(${canvasTranslate.x},${canvasTranslate.y})</li>
    <li>imageTranslate:(${imageTranslate.x},${imageTranslate.y})</li>
    <li>canvasScale:(${canvasScale.x}, ${canvasScale.y})</li>
    <li>canvasImageSize width:${canvasImageSize.width} height:${canvasImageSize.height}</li>
    <li>naturalImageSize width:${naturalImageSize.width} height:${naturalImageSize.height}</li>
    `
  }
}
