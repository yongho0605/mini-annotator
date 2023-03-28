import getCanvasMousePosition from '/src/components/canvas/getCanvasMousePosition.js'
import {
  imageCanvas,
  guideLineCanvas,
  imageCtx,
} from '/src/components/canvas/canvasExport.js'

// FIXME: 우선 놔두고 다른거 해야할듯, 확대 및 축소가 젤 어려운 것 같음...
export default function zoom(img) {
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
