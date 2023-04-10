export const canvasAggregation = {
  imgCanvas: document.querySelector('#imgCanvas'),
  guideLineCanvas: document.querySelector('#guideLineCanvas'),
}

export const { imgCanvas, guideLineCanvas } = canvasAggregation

export const ctxAggregation = {
  imgCtx: imgCanvas.getContext('2d'),
  guideLineCtx: guideLineCanvas.getContext('2d'),
}

export const { imgCtx, guideLineCtx } = ctxAggregation

export function getCanvasMousePosition(e, canvas) {
  const canvasRect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / canvasRect.width
  const scaleY = canvas.height / canvasRect.height

  return {
    x: Math.floor((e.clientX - canvasRect.left) * scaleX),
    y: Math.floor((e.clientY - canvasRect.top) * scaleY),
  }
}
