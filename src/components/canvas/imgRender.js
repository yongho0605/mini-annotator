import guideLine from '/src/components/toolkit/guideLine.js'
import Zoom from '/src/components/toolkit/zoom/zoom.js'
import Pan from '/src/components/toolkit/pan/pan.js'
import Resize from '/src/components/toolkit/resize/resize.js'
import mouseTracker from '/src/components/toolkit/mouseTracker.js'

export default function imgCanvasRender() {
  const img = new Image()
  // img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  img.src = '/src/assets/images/tesla_model_S_Plaid.webp'
  img.onload = function () {
    guideLine.init()
    Resize.init(img)
    Zoom.init(img)
    Pan.init(img)
    mouseTracker(img)
    Resize.applyAnnotator(img)
  }
}
