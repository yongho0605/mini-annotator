import activeGuideLine from '/src/components/toolkit/activeGuideLine.js'
import activeZoom from '/src/components/toolkit/activeZoom.js'
import {
  imgCanvas as canvas,
  imgCtx as ctx,
} from '/src/components/canvas/canvasExport.js'
import { setCanvasSize } from '/src/components/canvas/canvasExport.js'
import activePan from '/src/components/toolkit/activePan.js'
import imgStore from '/src/store/imgStore.js'
import applyChangesOnResize from '/src/components/toolkit/resize/applyChangesOnResize.js'
import { annotatorEl } from '/src/components/modules/getElement.js'

export default function imgCanvasRender() {
  setCanvasSize()
  const img = new Image()
  // img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  img.src = '/src/assets/images/tesla_model_S_Plaid.webp'
  imgStore.source = img

  img.onload = function () {
    activeGuideLine()
    activeZoom(img)
    activePan(img)
    applyChangesOnResize(img, canvas, ctx, annotatorEl)
  }
}
