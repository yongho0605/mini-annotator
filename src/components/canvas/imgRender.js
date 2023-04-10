import applyGuideLine from '/src/components/toolkit/guideLine.js'
import applyZoom from '/src/components/toolkit/zoom.js'
import applyPan from '/src/components/toolkit/pan.js'
import { applyChangesOnResize } from '/src/components/toolkit/resize/resizeUtil.js'
import {
  imgCanvas,
  imgCtx,
  setCanvasSize,
} from '/src/components/canvas/canvasExport.js'
import applyResize from '/src/components/toolkit/resize/resize.js'
import chaseCoordinate from '/src/components/toolkit/mouseTracker.js'

export default function imgCanvasRender() {
  setCanvasSize()
  const img = new Image()
  // img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  img.src = '/src/assets/images/tesla_model_S_Plaid.webp'

  img.onload = function () {
    // FIXME: 함수명을 명시적으로 적용하기.
    applyGuideLine()
    applyResize(img)
    applyZoom(img)
    applyPan(img)
    chaseCoordinate(img)
    applyChangesOnResize(img, imgCanvas, imgCtx)
  }
}
