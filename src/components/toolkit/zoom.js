import CoordStore from '/src/store/coordStore.js'
import { applyChangesOnResize } from '/src/components/toolkit/resize/resizeUtil.js'
import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  imgCanvas,
  guideLineCanvas,
  imgCtx,
} from '/src/components/canvas/canvasExport.js'

export default function applyZoom(img) {
  const scale = {
    current: 1,
    after: null,
  }

  function onWheel(e) {
    applyChangesOnResize(img, imgCanvas, imgCtx)
    const { x, y } = getCanvasMousePosition(e, guideLineCanvas)
    const { imgTranslate, imgSize } = CoordStore
    const minScale = 0.1
    const maxScale = 100
    const scaleFactor = e.deltaY > 0 ? 0.9 : 1.1
    imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)

    applyTranslation()

    function applyTranslation() {
      if (scaleFactor === 0.9 && scale.current > minScale) {
        compareScaledCondition()
      } else if (scaleFactor === 1.1 && scale.current < maxScale) {
        compareScaledCondition()
      }
      function compareScaledCondition() {
        scale.current = scale.current * scaleFactor
        scale.after = scale.current * scaleFactor
        if (e.deltaY === 0) {
          scale.current = 1
          scale.after = 1
        }
        const getComputedScaledSize = (size) => size - size * scale.current
        const computedScaledSize = {
          width: getComputedScaledSize(imgCanvas.width) / (imgCanvas.width / x),
          height:
            getComputedScaledSize(imgCanvas.height) / (imgCanvas.height / y),
        }
        const translate = {
          x: computedScaledSize.width,
          y: computedScaledSize.height,
        }
        imgCtx.setTransform(
          scale.current,
          0,
          0,
          scale.current,
          translate.x,
          translate.y
        )
      }
    }
    imgCtx.drawImage(
      img,
      imgTranslate.x,
      imgTranslate.y,
      imgSize.width,
      imgSize.height
    )
  }
  guideLineCanvas.addEventListener('wheel', onWheel)
}
