import ActiveGuideLine from '/src/components/toolkit/activeGuideLine.js'
import ActiveZoom from '/src/components/toolkit/activeZoom.js'
import ActivePan from '/src/components/toolkit/activePan.js'
import ImgStore from '/src/store/imgStore.js'
import InitCanvasImgSize from '/src/components/toolkit/resize/applyChangesOnResize.js'
import { imgCanvas, imgCtx } from '/src/components/canvas/canvasExport.js'
import { setCanvasSize } from '/src/components/canvas/canvasExport.js'

export default function imgCanvasRender() {
  setCanvasSize()
  const img = new Image()
  // img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  img.src = '/src/assets/images/tesla_model_S_Plaid.webp'
  ImgStore.source = img

  img.onload = function () {
    ActiveGuideLine()
    ActiveZoom(img)
    ActivePan(img)

    InitCanvasImgSize(img, imgCanvas, imgCtx)
  }
}
