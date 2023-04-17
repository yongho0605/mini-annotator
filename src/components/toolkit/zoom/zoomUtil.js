import ZoomStore from '/src/store/zoomStore.js'

export function applyChangesOnTranslate(e, scale, coordCollection, ctx) {
  const { mouseCoordArr, currentGLCoord } = coordCollection
  let { x, y } = currentGLCoord

  if (scale.factor === 0.9 && ZoomStore.scale.before > scale.min) {
    compareCoordCondition()
  } else if (scale.factor === 1.1 && ZoomStore.scale.before < scale.max) {
    compareCoordCondition()
  }

  function compareCoordCondition() {
    ZoomStore.scale.before = ZoomStore.scale.current
    ZoomStore.scale.current = ZoomStore.scale.before * scale.factor

    if (e.deltaY === 0) {
      ZoomStore.scale.current = ZoomStore.scale.before
      return
    }

    mouseCoordArr.push(currentGLCoord)
    mouseCoordArr.length > 2 && mouseCoordArr.shift()
    const beforeGLCoord = { x: mouseCoordArr[0].x, y: mouseCoordArr[0].y }

    function assignTranslationCoord() {
      x = ZoomStore.translate.x
      y = ZoomStore.translate.y
    }

    function assignComputedGLCoord(targetCoord) {
      ZoomStore.translate.x = (x - beforeGLCoord.x) / ZoomStore.scale.before + targetCoord.x
      ZoomStore.translate.y = (y - beforeGLCoord.y) / ZoomStore.scale.before + targetCoord.y
    }

    ctx.setTransform(ZoomStore.scale.current, 0, 0, ZoomStore.scale.current, x, y)
    if (beforeGLCoord.x !== x || beforeGLCoord.y !== y) {
      ZoomStore.translate.x ? assignComputedGLCoord(ZoomStore.translate) : assignComputedGLCoord(beforeGLCoord)
      assignTranslationCoord()
    } else if (ZoomStore.translate.x) {
      assignTranslationCoord()
    }
    ctx.translate(-x, -y)
  }
}
