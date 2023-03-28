import guideLine from '/src/components/toolkit/guideLine.js'
import zoom from '/src/components/toolkit/zoom.js'
import { imageCanvas, imageCtx } from '/src/components/canvas/canvasExport.js'
import { setCanvasRatio } from '/src/components/canvas/canvasExport.js'
import panning from '/src/components/toolkit/panning.js'
import resize from '/src/components/toolkit/resizer.js'

export default function canvasImageRender() {
  const img = new Image()
  // img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  img.src = '/src/assets/images/tesla_model_S_Plaid.webp'

  img.onload = function () {
    setCanvasRatio(img)
    guideLine()
    zoom(img)
    panning(img)
    const x = (imageCanvas.width - img.width) / 2
    const y = (imageCanvas.height - img.height) / 2
    imageCtx.drawImage(img, x, y)
  }
}
