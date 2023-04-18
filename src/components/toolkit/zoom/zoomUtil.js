import ZoomStore from '/src/store/zoomStore.js'

export function applyChangesOnTranslate(
  e,
  scale,
  mouseCoordArr,
  currentGLCoord,
  ctx
) {
  if (scale.factor === 0.9 && ZoomStore.scale.current > scale.min) {
    compareCoordCondition()
  } else if (scale.factor === 1.1 && ZoomStore.scale.current < scale.max) {
    compareCoordCondition()
  }

  function compareCoordCondition() {
    ZoomStore.scale.before = ZoomStore.scale.current
    ZoomStore.scale.current = ZoomStore.scale.before * scale.factor

    if (e.deltaY === 0) {
      ZoomStore.scale.current = ZoomStore.scale.before
      return
    }

    mouseCoordArr.push({ ...currentGLCoord })
    mouseCoordArr.length > 2 && mouseCoordArr.shift()
    const beforeGLCoord = { x: mouseCoordArr[0].x, y: mouseCoordArr[0].y }

    function assignTranslation() {
      currentGLCoord.x = ZoomStore.translate.x
      currentGLCoord.y = ZoomStore.translate.y
    }

    function assignComputedGLCoord(targetCoord) {
      const getComputedCoord = (axis) =>
        (currentGLCoord[axis] - beforeGLCoord[axis]) / ZoomStore.scale.before +
        targetCoord[axis]
      ZoomStore.translate.x = getComputedCoord('x')
      ZoomStore.translate.y = getComputedCoord('y')
    }

    ctx.setTransform(
      ZoomStore.scale.current,
      0,
      0,
      ZoomStore.scale.current,
      currentGLCoord.x,
      currentGLCoord.y
    )
    if (
      beforeGLCoord.x !== currentGLCoord.x ||
      beforeGLCoord.y !== currentGLCoord.y
    ) {
      ZoomStore.translate.x
        ? assignComputedGLCoord(ZoomStore.translate)
        : assignComputedGLCoord(beforeGLCoord)
      assignTranslation()
    } else if (ZoomStore.translate.x) {
      assignTranslation()
    }
    ctx.translate(-currentGLCoord.x, -currentGLCoord.y)
  }
}
