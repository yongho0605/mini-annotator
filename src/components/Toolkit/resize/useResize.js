export default function useResize(img, canvas, ctx, rectEl) {
  const scaleFactor = Math.min(
    canvas.width / img.width,
    canvas.height / img.height
  )
  const canvasImgWidth = getRoundValue(img.width * scaleFactor)
  const canvasImgHeight = getRoundValue(img.height * scaleFactor)
  function getRoundValue(value) {
    return Math.round(value)
  }
  const rect = rectEl.getBoundingClientRect()
  const imageWidth = img.width / img.height
  const imageHeight = img.height / img.width
  const rectWidth = rect.width / rect.height
  const rectHeight = rect.height / rect.width
  const canvasRectWidth = canvas.width / rect.width
  const canvasRectHeight = canvas.height / rect.height
  const responsiveWidth = canvasRectWidth / canvasRectHeight
  const responsiveHeight = canvasRectHeight / canvasRectWidth
  const rectImageScale = rectWidth * imageHeight
  const canvasImageWidthRectRatio = canvasImgWidth * (imageHeight * rectHeight)

  let x = (canvas.width - canvasImgWidth) / 2
  let y = (canvas.height - canvasImgHeight) / 2

  ctx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
  if (rect.width > rect.height) {
    if (rect.width < canvasImageWidthRectRatio) {
      ctx.scale(responsiveWidth * rectImageScale, rectImageScale)
      x = getRoundValue(
        (canvas.width / responsiveWidth / rectImageScale - canvasImgWidth) / 2
      )
      y = (canvas.height / rectImageScale - canvasImgHeight) / 2
    } else {
      ctx.scale(responsiveWidth, 1)
      x = getRoundValue((canvas.width / responsiveWidth - canvasImgWidth) / 2)
    }
  } else {
    if (img.width < canvas.width) {
      ctx.scale(imageWidth, responsiveHeight * imageWidth)
      x = 0
      y = getRoundValue(
        (canvas.height / responsiveHeight / imageWidth - canvasImgHeight) / 2
      )
    } else {
      ctx.scale(1, responsiveHeight)
      y = getRoundValue(
        (canvas.height / responsiveHeight - canvasImgHeight) / 2
      )
    }
  }
  ctx.drawImage(img, x, y, canvasImgWidth, canvasImgHeight)
}
