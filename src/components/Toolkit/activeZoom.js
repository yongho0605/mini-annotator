import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  imageCanvas,
  guideLineCanvas,
  imageCtx,
} from '/src/components/canvas/canvasExport.js'

// FIXME: 확대 축소 먼저 구현
export default function activeZoom(img) {
  function wheel(e) {
    // const mousePos = getCanvasMousePosition(e, guideLineCanvas)
    // const x = mousePos.x / 2
    // const y = mousePos.y / 2
    e.deltaY < 0 ? zoomIn() : zoomOut()

    function zoomOut() {
      console.log(imageCanvas.width)
      imageCanvas.width *= 1.1
      imageCanvas.height *= 1.1
      const x = (imageCanvas.width - img.width) / 2
      const y = (imageCanvas.height - img.height) / 2

      if (imageCanvas.width < 13000) {
        imageCtx.drawImage(img, x, y)
      } else if (imageCanvas.width > 13000) {
        imageCanvas.width = 13000
        imageCanvas.height = 13000
      }
    }

    function zoomIn() {
      console.log(imageCanvas.width)
      imageCanvas.width *= 0.9
      imageCanvas.height *= 0.9
      const x = (imageCanvas.width - img.width) / 2
      const y = (imageCanvas.height - img.height) / 2

      imageCtx.drawImage(img, x, y)
    }
  }

  guideLineCanvas.addEventListener('wheel', wheel)
}
