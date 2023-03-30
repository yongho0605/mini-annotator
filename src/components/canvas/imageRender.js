import activeGuideLine from '/src/components/toolkit/activeGuideLine.js'
import activeZoom from '/src/components/toolkit/activeZoom.js'
import {
  imageCanvas as canvas,
  imageCtx as ctx,
} from '/src/components/canvas/canvasExport.js'
import { setCanvasSize } from '/src/components/canvas/canvasExport.js'
import activePan from '/src/components/toolkit/activePan.js'
import { image } from '/src/store/image.js'
import useResize from '/src/components/toolkit/resize/useResize.js'
import { annotatorEl } from '/src/components/modules/getElement.js'

export default function canvasImageRender() {
  setCanvasSize()
  const img = new Image()
  // img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  img.src = '/src/assets/images/tesla_model_S_Plaid.webp'
  image.source = img

  img.onload = function () {
    activeGuideLine()
    activeZoom(img)
    activePan(img)
    useResize(img, canvas, ctx, annotatorEl)
  }
}
