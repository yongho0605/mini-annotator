import { $ } from '/src/modules/elements.js'

export const canvas = {
  img: $('#imgCanvas'),
  guideLine: $('#guideLineCanvas'),

  getMousePos: (e, targetCanvas) => {
    const canvasRect = targetCanvas.getBoundingClientRect()
    const scaleX = targetCanvas.width / canvasRect.width
    const scaleY = targetCanvas.height / canvasRect.height
    return {
      x: Math.floor((e.clientX - canvasRect.left) * scaleX),
      y: Math.floor((e.clientY - canvasRect.top) * scaleY),
    }
  },
}

export const ctx = {
  img: canvas.img.getContext('2d'),
  guideLine: canvas.guideLine.getContext('2d'),
}
