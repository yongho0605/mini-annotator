import CoordStore from '/src/store/coordStore.js'
import { getCanvasMousePosition } from '/src/components/canvas/canvasExport.js'
import {
  imgCanvas,
  guideLineCanvas,
  imgCtx,
} from '/src/components/canvas/canvasExport.js'

export default function applyZoom(img) {
  const scale = {
    before: 1,
    current: 1,
    min: 0.1,
    max: 100,
  }
  const mouseCoordArr = []

  function onWheel(e) {
    let { x, y } = getCanvasMousePosition(e, imgCanvas)
    const { imgTranslate, imgSize } = CoordStore
    const scaleFactor = e.deltaY > 0 ? 0.9 : 1.1
    imgCtx.clearRect(-10, -10, imgCanvas.width + 20, imgCanvas.height + 20)

    applyTranslation()

    function applyTranslation() {
      if (scaleFactor === 0.9 && scale.before > scale.min) {
        compareScaledCondition()
      } else if (scaleFactor === 1.1 && scale.before < scale.max) {
        compareScaledCondition()
      }

      function compareScaledCondition() {
        scale.before = scale.current
        scale.current = scale.before * scaleFactor
        if (e.deltaY === 0) {
          scale.current = scale.before
          return
        }
        const currentMouseCoord = { x, y }
        if (
          mouseCoordArr.length < 2 ||
          mouseCoordArr[0].x !== x ||
          mouseCoordArr[0].y !== y
        ) {
          mouseCoordArr.push(currentMouseCoord)
        }
        mouseCoordArr.length > 2 && mouseCoordArr.shift()
        const beforeCoord = {
          x: mouseCoordArr[0].x,
          y: mouseCoordArr[0].y,
        }

        imgCtx.setTransform(scale.current, 0, 0, scale.current, x, y)
        if (beforeCoord.x !== x || beforeCoord.y !== y) {
          x = (x - beforeCoord.x) / scale.before + beforeCoord.x
          y = (y - beforeCoord.y) / scale.before + beforeCoord.y
        }
        imgCtx.translate(-x, -y)
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
