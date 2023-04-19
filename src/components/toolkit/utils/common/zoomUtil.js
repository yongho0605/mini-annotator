import Store from '/src/store/store.js'

export function applyChangesOnTranslate(
  e,
  scale,
  mouseCoordArr,
  originCurrentGLCoord,
  ctx
) {
  const { zoom, pan } = Store
  if (scale.factor === 0.9 && zoom.scale.current > scale.min) {
    compareCoordCondition()
  } else if (scale.factor === 1.1 && zoom.scale.current < scale.max) {
    compareCoordCondition()
  }

  function compareCoordCondition() {
    const currentGLCoord = { ...originCurrentGLCoord }
    Store.zoom.scale.before = zoom.scale.current
    Store.zoom.scale.current = zoom.scale.before * scale.factor

    if (e.deltaY === 0) {
      Store.zoom.scale.current = zoom.scale.before
      return
    }

    mouseCoordArr.push({ ...originCurrentGLCoord })
    mouseCoordArr.length > 2 && mouseCoordArr.shift()
    const beforeGLCoord = { x: mouseCoordArr[0].x, y: mouseCoordArr[0].y }

    function assignTranslation() {
      currentGLCoord.x = zoom.willTranslate.x
      currentGLCoord.y = zoom.willTranslate.y
    }

    function assignComputedGLCoord(targetCoord) {
      const getComputedTranslation = (axis) =>
        (currentGLCoord[axis] - beforeGLCoord[axis]) / zoom.scale.before +
        targetCoord[axis]
      Store.zoom.willTranslate.x = getComputedTranslation('x')
      Store.zoom.willTranslate.y = getComputedTranslation('y')
    }

    const compareCoordCondition = (axis) =>
      beforeGLCoord[axis] !== currentGLCoord[axis]

    ctx.setTransform(
      zoom.scale.current,
      0,
      0,
      zoom.scale.current,
      currentGLCoord.x + pan.willTranslate.x * zoom.scale.current,
      currentGLCoord.y + pan.willTranslate.y * zoom.scale.current
    )
    if (compareCoordCondition('x') || compareCoordCondition('y')) {
      zoom.willTranslate.x
        ? assignComputedGLCoord(zoom.willTranslate)
        : assignComputedGLCoord(beforeGLCoord)
      assignTranslation()
    } else if (zoom.willTranslate.x) {
      assignTranslation()
    }

    ctx.translate(-currentGLCoord.x, -currentGLCoord.y)
    const transform = ctx.getTransform()
    Store.zoom.translation = { x: transform.e, y: transform.f }
  }
}
