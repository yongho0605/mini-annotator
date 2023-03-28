import activeGuideLine from '/src/components/toolkit/activeGuideLine.js'
import activeZoom from '/src/components/toolkit/activeZoom.js'
import { imageCanvas, imageCtx } from '/src/components/canvas/canvasExport.js'
import { setCanvasSize } from '/src/components/canvas/canvasExport.js'
import activePan from '/src/components/toolkit/activePan.js'

export default function canvasImageRender() {
  const img = new Image()
  img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  // img.src = '/src/assets/images/tesla_model_S_Plaid.webp'

  img.onload = function () {
    setCanvasSize(img)
    activeGuideLine()
    activeZoom(img)
    activePan(img)
    const x = (imageCanvas.width - img.naturalWidth) / 2
    const y = (imageCanvas.height - img.naturalHeight) / 2
    imageCtx.drawImage(img, x, y)
  }
}
