import ActiveGuideLine from '/src/components/toolkit/activeGuideLine.js'
import ActiveZoom from '/src/components/toolkit/activeZoom.js'
import ActivePan from '/src/components/toolkit/activePan.js'
import InitCanvasImgSize from '/src/components/toolkit/resize/applyChangesOnResize.js'
import { imgCanvas, imgCtx } from '/src/components/canvas/canvasExport.js'
import { setCanvasSize } from '/src/components/canvas/canvasExport.js'
import activeResize from '/src/components/toolkit/resize/activeResize.js'
import chaseCoordinate from '/src/components/toolkit/chaseCoordinate.js'

export default function imgCanvasRender() {
  setCanvasSize()
  const img = new Image()
  // img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  img.src = '/src/assets/images/tesla_model_S_Plaid.webp'

  img.onload = function () {
    ActiveGuideLine()
    activeResize(img)
    ActiveZoom(img)
    ActivePan(img)
    chaseCoordinate(img)

    InitCanvasImgSize(img, imgCanvas, imgCtx)
  }
}
