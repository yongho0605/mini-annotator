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
