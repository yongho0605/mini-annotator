import guideLine from '/src/components/toolkit/guideLine.js'
import zoom from '/src/components/toolkit/zoom.js'
import { imageCanvas, imageCtx } from '/src/components/canvas/canvasExport.js'
import { setCanvasSize } from '/src/components/canvas/canvasExport.js'
import panning from '/src/components/toolkit/panning.js'

export default function canvasImageRender() {
  const img = new Image()
  img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  // img.src = '/src/assets/images/tesla_model_S_Plaid.webp'

  img.naturalWidth
  // 이 메소드를 사용해서 계산 하는게 좋음

  img.onload = function () {
    setCanvasSize(img)
    guideLine()
    zoom(img)
    panning(img)
    const x = (imageCanvas.width - img.width) / 2
    const y = (imageCanvas.height - img.height) / 2
    imageCtx.drawImage(img, x, y)
  }
}
