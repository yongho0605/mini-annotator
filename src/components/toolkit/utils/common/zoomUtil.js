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
      currentGLCoord.x = zoom.translate.x
      currentGLCoord.y = zoom.translate.y
    }

    function assignComputedGLCoord(targetCoord) {
      const getComputedTranslation = (axis) =>
        (currentGLCoord[axis] - beforeGLCoord[axis]) / zoom.scale.before +
        targetCoord[axis]
      Store.zoom.translate.x = getComputedTranslation('x')
      Store.zoom.translate.y = getComputedTranslation('y')
    }
    const compareCoordCondition = (axis) =>
      beforeGLCoord[axis] !== currentGLCoord[axis]
    // scale 1일때의 거리
    // const getComputedTranslation = (axis) =>
    //   currentGLCoord[axis] + pan.translate[axis] * zoom.scale.current
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
      zoom.translate.x
        ? assignComputedGLCoord(zoom.translate)
        : assignComputedGLCoord(beforeGLCoord)
      assignTranslation()
    } else if (zoom.translate.x) {
      assignTranslation()
    }
    ctx.translate(-currentGLCoord.x, -currentGLCoord.y)

    const transform = ctx.getTransform()
    Store.canvas.moved = { x: transform.e, y: transform.f }
    console.log('Store.zoom.moved', Store.canvas.moved)
  }
}
