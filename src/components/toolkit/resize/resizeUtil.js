import { annotatorEl } from '/src/components/modules/getElement.js'
import CoordStore from '/src/store/coordStore.js'

export function applyChangesOnResize(img, canvas, ctx) {
  const scaleFactor = Math.min(
    canvas.width / img.width,
    canvas.height / img.height
  )
  let canvasImgWidth = Math.round(img.width * scaleFactor)
  let canvasImgHeight = Math.round(img.height * scaleFactor)

  const rect = annotatorEl.getBoundingClientRect()
  const imgWidth = img.width / img.height
  const imgHeight = img.height / img.width
  const rectWidth = rect.width / rect.height
  const rectHeight = rect.height / rect.width
  const canvasRectWidth = canvas.width / rect.width
  const canvasRectHeight = canvas.height / rect.height
  const verticalAspect = canvasRectWidth / canvasRectHeight
  const horizontalAspect = canvasRectHeight / canvasRectWidth
  const canvasImgWidthRatio = Math.round(img.width * (imgHeight * rectHeight))
  const scaledRectWidth = rect.width * scaleFactor

  let x = (canvas.width - canvasImgWidth) / 2
  let y = (canvas.height - canvasImgHeight) / 2

  function getScaledCanvasWidth(scaleNum) {
    return Math.round(img.width * scaleFactor * scaleNum)
  }
  function getScaledCanvasHeight(scaleNum) {
    return Math.round(img.height * scaleFactor * scaleNum)
  }
  function reassignmentCoord() {
    x = (canvas.width - canvasImgWidth) / 2
    y = (canvas.height - canvasImgHeight) / 2
  }
  function saveCoordStore(x, y, imgWidth, imgHeight) {
    CoordStore.imgTranslate.x = x
    CoordStore.imgTranslate.y = y
    CoordStore.imgSize.width = imgWidth
    CoordStore.imgSize.height = imgHeight
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  if (rect.width > rect.height) {
    if (scaledRectWidth < canvasImgWidthRatio) {
      canvasImgWidth = getScaledCanvasWidth(
        verticalAspect * rectWidth * imgHeight
      )
      canvasImgHeight = getScaledCanvasHeight(rectWidth * imgHeight)
    } else {
      canvasImgWidth = getScaledCanvasWidth(verticalAspect)
    }
  } else {
    if (img.width < canvas.width) {
      canvasImgWidth = getScaledCanvasWidth(imgWidth)
      canvasImgHeight = getScaledCanvasHeight(horizontalAspect * imgWidth)
    } else {
      canvasImgHeight = getScaledCanvasHeight(horizontalAspect)
    }
  }
  reassignmentCoord()
  saveCoordStore(x, y, canvasImgWidth, canvasImgHeight)
  ctx.imageSmoothingEnabled = false
  ctx.drawImage(img, x, y, canvasImgWidth, canvasImgHeight)
}
