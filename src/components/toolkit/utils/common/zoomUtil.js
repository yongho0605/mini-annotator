import Store from '/src/store/store.js'

const ZoomTranslate = { x: null, y: null }
export function applyChangesOnTranslate(
  evt,
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

    if (evt.deltaY === 0) {
      Store.zoom.scale.current = zoom.scale.before
      return
    }

    mouseCoordArr.push({ ...originCurrentGLCoord })
    mouseCoordArr.length > 2 && mouseCoordArr.shift()
    const beforeGLCoord = { x: mouseCoordArr[0].x, y: mouseCoordArr[0].y }

    function assignTranslation() {
      currentGLCoord.x = ZoomTranslate.x
      currentGLCoord.y = ZoomTranslate.y
    }

    function assignComputedGLCoord(targetCoord) {
      const getComputedTranslation = (axis) =>
        (currentGLCoord[axis] - beforeGLCoord[axis]) / zoom.scale.before +
        targetCoord[axis]
      ZoomTranslate.x = getComputedTranslation('x')
      ZoomTranslate.y = getComputedTranslation('y')
    }
    const compareCoordCondition = (axis) =>
      beforeGLCoord[axis] !== currentGLCoord[axis]

    const getComputedTranslation = (axis) =>
      currentGLCoord[axis] + pan.translate[axis] * zoom.scale.current

    const translate = {
      x: getComputedTranslation('x'),
      y: getComputedTranslation('y'),
    }

    ctx.setTransform(
      zoom.scale.current,
      0,
      0,
      zoom.scale.current,
      translate.x,
      translate.y
    )

    if (compareCoordCondition('x') || compareCoordCondition('y')) {
      ZoomTranslate.x || ZoomTranslate.y
        ? assignComputedGLCoord(ZoomTranslate)
        : assignComputedGLCoord(beforeGLCoord)
      assignTranslation()
    } else if (ZoomTranslate.x || ZoomTranslate.y) {
      assignTranslation()
    }
    ctx.translate(-currentGLCoord.x, -currentGLCoord.y)
  }
}
