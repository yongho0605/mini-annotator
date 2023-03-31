import { annotatorEl } from '/src/components/modules/getElement.js'
export default function applyChangesOnResize(img, canvas, ctx) {
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

  function getScaledCanvasWidth(value) {
    return Math.round(img.width * scaleFactor * value)
  }
  function getScaledCanvasHeight(value) {
    return Math.round(img.height * scaleFactor * value)
  }
  function reassignmentCoordinate() {
    x = (canvas.width - canvasImgWidth) / 2
    y = (canvas.height - canvasImgHeight) / 2
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
  reassignmentCoordinate()
  ctx.drawImage(img, x, y, canvasImgWidth, canvasImgHeight)
}
