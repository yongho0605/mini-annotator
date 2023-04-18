export const imgCanvas = document.querySelector('#imgCanvas')
export const guideLineCanvas = document.querySelector('#guideLineCanvas')

export const imgCtx = imgCanvas.getContext('2d')
export const guideLineCtx = guideLineCanvas.getContext('2d')

export function getCanvasMousePosition(e, canvas) {
  const canvasRect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / canvasRect.width
  const scaleY = canvas.height / canvasRect.height

  return {
    x: Math.floor((e.clientX - canvasRect.left) * scaleX),
    y: Math.floor((e.clientY - canvasRect.top) * scaleY),
  }
}
