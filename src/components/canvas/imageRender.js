import guideLine from '/src/components/toolkit/guideLine.js'
import { imageCanvas, imageCtx } from '/src/components/canvas/canvasExport.js'
import { setCanvasRatio } from '/src/components/canvas/canvasExport.js'

export default function canvasImageRender() {
  const img = new Image()
  img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  // img.src = '/src/assets/images/reuseableRocket.jpeg'

  img.onload = function () {
    setCanvasRatio(img)
    guideLine()
    const x = (imageCanvas.width - img.width) / 2
    const y = (imageCanvas.height - img.height) / 2
    imageCtx.drawImage(img, x, y, img.width, img.height)
  }
}
