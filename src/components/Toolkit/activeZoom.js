import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  imageCanvas,
  guideLineCanvas,
  imageCtx,
} from '/src/components/canvas/canvasExport.js'

// FIXME: 확대 축소 먼저 구현
export default function activeZoom(img) {
  function wheel(e) {
    const { x, y } = getCanvasMousePosition(e, guideLineCanvas)

    const scale = e.deltaY > 0 ? 0.9 : 1.1
    console.log(e.deltaY)

    imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)

    imageCtx.translate(x, y)
    imageCtx.scale(scale, scale)
    imageCtx.translate(-x, -y)

    imageCtx.drawImage(img, 0, 0)
  }

  guideLineCanvas.addEventListener('wheel', wheel)
}
