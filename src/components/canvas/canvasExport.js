export const canvasObj = {
  imgCanvas: document.querySelector('#imgCanvas'),
  guideLineCanvas: document.querySelector('#guideLineCanvas'),
}

export const { imgCanvas: imgCanvas, guideLineCanvas } = canvasObj

export const ctxObj = {
  imgCtx: imgCanvas.getContext('2d'),
  guideLineCtx: guideLineCanvas.getContext('2d'),
}

export const { imgCtx, guideLineCtx } = ctxObj

export function setCanvasSize() {
  Object.keys(canvasObj).forEach((canvas) => {
    canvasObj[canvas].width = 1920
    canvasObj[canvas].height = 1080
  })
}

export function getCanvasMousePosition(e, canvas) {
  const canvasRect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / canvasRect.width
  const scaleY = canvas.height / canvasRect.height

  return {
    x: Math.floor((e.clientX - canvasRect.left) * scaleX),
    y: Math.floor((e.clientY - canvasRect.top) * scaleY),
  }
}
