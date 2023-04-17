import { applyGuideLine } from '/src/components/toolkit/guideLine.js'
import applyZoom from '/src/components/toolkit/zoom.js'
import applyPan from '/src/components/toolkit/pan.js'
import Resize from '/src/components/toolkit/resize/resize.js'
import mouseTracker from '/src/components/toolkit/mouseTracker.js'

export default function imgCanvasRender() {
  const img = new Image()
  // img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  img.src = '/src/assets/images/tesla_model_S_Plaid.webp'
  img.onload = function () {
    Resize.init(img)
    applyGuideLine()
    applyZoom(img)
    applyPan(img)
    mouseTracker(img)
    Resize.applyAnnotator(img)
  }
}
