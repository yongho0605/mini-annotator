import CoordStore from '/src/store/coordStore.js'
import applyChangesOnResize from '/src/components/toolkit/resize/applyChangesOnResize.js'
import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  imgCanvas,
  guideLineCanvas,
  imgCtx,
} from '/src/components/canvas/canvasExport.js'

export default function activeZoom(img) {
  const roundFloatingPoint_2 = (num) => Number(num.toFixed(2))
  let currentScale = 1
  const afterScale = null
  const scaleArray = [currentScale, afterScale]

  function onWheel(e) {
    applyChangesOnResize(img, imgCanvas, imgCtx)
    const { x, y } = getCanvasMousePosition(e, guideLineCanvas)
    const { imgTranslate, imgSize } = CoordStore
    const minScale = 0.1
    const maxScale = 30
    const scaleFactor = e.deltaY > 0 ? 0.9 : 1.1
    imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)

    applyTranslate()

    function applyTranslate() {
      if (scaleFactor === 0.9 && scaleArray[0] > minScale) {
        compareScaledCondition()
      } else if (scaleFactor === 1.1 && scaleArray[0] < maxScale) {
        compareScaledCondition()
      }
      function compareScaledCondition() {
        const reassignmentIndex = () =>
          roundFloatingPoint_2(scaleArray[0] * scaleFactor)
        scaleArray[0] = reassignmentIndex()
        scaleArray[1] = reassignmentIndex()
        if (e.deltaY === -0) {
          scaleArray[0] = 1
          scaleArray[1] = 1
        }
        const currentScale = scaleArray[0]
        const getTranslateScaled = (size) => size - size * currentScale
        const translateScaledWidth = getTranslateScaled(imgCanvas.width)
        const translateScaledHeight = getTranslateScaled(imgCanvas.height)
        const translateX = roundFloatingPoint_2(translateScaledWidth / 2)
        const translateY = roundFloatingPoint_2(translateScaledHeight / 2)
        imgCtx.setTransform(
          currentScale,
          0,
          0,
          currentScale,
          translateX,
          translateY
        )
        // imgCtx.translate(-translateX, -translateY)
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
