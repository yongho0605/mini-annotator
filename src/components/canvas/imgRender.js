import { applyGuideLine } from '/src/components/toolkit/guideLine.js'
import { setCanvasSize } from '/src/components/canvas/canvasExport.js'
import applyZoom from '/src/components/toolkit/zoom.js'
import applyPan from '/src/components/toolkit/pan.js'
import resize from '/src/components/toolkit/resize/resize.js'
import mouseTracker from '/src/components/toolkit/mouseTracker.js'

export default function imgCanvasRender() {
  setCanvasSize()
  const img = new Image()
  // img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  img.src = '/src/assets/images/tesla_model_S_Plaid.webp'

  img.onload = function () {
    resize.init(img)
    resize.applyAnnotator(img)
    applyGuideLine()
    applyZoom(img)
    applyPan(img)
    mouseTracker(img)
  }
}
