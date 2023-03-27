export const canvasObj = {
  imageCanvas: document.getElementById('imageCanvas'),
  guideLineCanvas: document.getElementById('guideLineCanvas'),
}

export const { imageCanvas, guideLineCanvas } = canvasObj

export const ctxObj = {
  imageCtx: imageCanvas.getContext('2d'),
  guideLineCtx: guideLineCanvas.getContext('2d'),
}

export const { imageCtx, guideLineCtx } = ctxObj

export function setCanvasRatio(img) {
  Object.keys(canvasObj).forEach((canvas) => {
    canvasObj[canvas].width = img.width
    canvasObj[canvas].height = img.height
  })
}
