import { annotatorEl } from '/src/components/modules/elements.js'
import Store from '/src/store/store.js'

export function applyChangesOnResize(img, canvas, ctx) {
  const scaleFactor = Math.min(
    canvas.width / img.width,
    canvas.height / img.height
  )
  let canvasImgWidth = img.width * scaleFactor
  let canvasImgHeight = img.height * scaleFactor

  const rect = annotatorEl.getBoundingClientRect()
  const canvasRectWidth = canvas.width / rect.width
  const canvasRectHeight = canvas.height / rect.height
  const verticalAspect = canvasRectWidth / canvasRectHeight
  const horizontalAspect = canvasRectHeight / canvasRectWidth

  let x = (canvas.width - canvasImgWidth) / 2
  let y = (canvas.height - canvasImgHeight) / 2

  function getScaledCanvasWidth(computedScale) {
    return img.width * scaleFactor * computedScale
  }
  function getScaledCanvasHeight(computedScale) {
    return img.height * scaleFactor * computedScale
  }
  function reassignmentCoord() {
    x = (canvas.width - canvasImgWidth) / 2
    y = (canvas.height - canvasImgHeight) / 2
  }
  function saveCoordStore(x, y, imgWidth, imgHeight) {
    Store.img.translation.x = x
    Store.img.translation.y = y
    Store.img.size.width = imgWidth
    Store.img.size.height = imgHeight
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  if (rect.width > rect.height) {
    canvasImgWidth = getScaledCanvasWidth(verticalAspect)
  } else {
    canvasImgHeight = getScaledCanvasHeight(horizontalAspect)
  }

  reassignmentCoord()
  saveCoordStore(x, y, canvasImgWidth, canvasImgHeight)
  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight
  ctx.imageSmoothingEnabled = false
  ctx.drawImage(img, x, y, canvasImgWidth, canvasImgHeight)
}
