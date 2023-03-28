export const canvasObj = {
  imageCanvas: document.querySelector('#imageCanvas'),
  guideLineCanvas: document.querySelector('#guideLineCanvas'),
}

export const { imageCanvas, guideLineCanvas } = canvasObj

export const ctxObj = {
  imageCtx: imageCanvas.getContext('2d'),
  guideLineCtx: guideLineCanvas.getContext('2d'),
}

export const { imageCtx, guideLineCtx } = ctxObj

export function setCanvasSize(img) {
  Object.keys(canvasObj).forEach((canvas) => {
    canvasObj[canvas].width = img.width
    canvasObj[canvas].height = img.height
  })
}

export function getCanvasMousePosition(e, canvas) {
  const canvasRect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / canvasRect.width
  const scaleY = canvas.height / canvasRect.height

  return {
    x: (e.clientX - canvasRect.left) * scaleX,
    y: (e.clientY - canvasRect.top) * scaleY,
  }
}
