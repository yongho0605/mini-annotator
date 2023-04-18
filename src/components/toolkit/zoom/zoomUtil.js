import Store from '/src/Store/Store.js'

export function applyChangesOnTranslate(
  e,
  scale,
  mouseCoordArr,
  currentGLCoord,
  ctx
) {
  if (scale.factor === 0.9 && Store.zoom.scale.current > scale.min) {
    compareCoordCondition()
  } else if (scale.factor === 1.1 && Store.zoom.scale.current < scale.max) {
    compareCoordCondition()
  }

  function compareCoordCondition() {
    Store.zoom.scale.before = Store.zoom.scale.current
    Store.zoom.scale.current = Store.zoom.scale.before * scale.factor

    if (e.deltaY === 0) {
      Store.zoom.scale.current = Store.zoom.scale.before
      return
    }

    mouseCoordArr.push({ ...currentGLCoord })
    mouseCoordArr.length > 2 && mouseCoordArr.shift()
    const beforeGLCoord = { x: mouseCoordArr[0].x, y: mouseCoordArr[0].y }

    function assignTranslation() {
      currentGLCoord.x = Store.zoom.translate.x
      currentGLCoord.y = Store.zoom.translate.y
    }

    function assignComputedGLCoord(targetCoord) {
      const getComputedCoord = (axis) =>
        (currentGLCoord[axis] - beforeGLCoord[axis]) / Store.zoom.scale.before +
        targetCoord[axis]
      Store.zoom.translate.x = getComputedCoord('x')
      Store.zoom.translate.y = getComputedCoord('y')
    }

    ctx.setTransform(
      Store.zoom.scale.current,
      0,
      0,
      Store.zoom.scale.current,
      currentGLCoord.x,
      currentGLCoord.y
    )
    if (
      beforeGLCoord.x !== currentGLCoord.x ||
      beforeGLCoord.y !== currentGLCoord.y
    ) {
      Store.zoom.translate.x
        ? assignComputedGLCoord(Store.zoom.translate)
        : assignComputedGLCoord(beforeGLCoord)
      assignTranslation()
    } else if (Store.zoom.translate.x) {
      assignTranslation()
    }
    ctx.translate(-currentGLCoord.x, -currentGLCoord.y)
  }
}
