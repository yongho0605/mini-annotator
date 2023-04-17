export function applyChangesOnTranslate(e, scale, coordCollection, ctx) {
  const { mouseCoordArr, computedGLCoord, currentGLCoord } = coordCollection
  let { x, y } = currentGLCoord

  if (scale.factor === 0.9 && scale.before > scale.min) {
    compareCoordCondition()
  } else if (scale.factor === 1.1 && scale.before < scale.max) {
    compareCoordCondition()
  }

  function compareCoordCondition() {
    scale.before = scale.current
    scale.current = scale.before * scale.factor

    if (e.deltaY === 0) {
      scale.current = scale.before
      return
    }

    mouseCoordArr.push(currentGLCoord)
    mouseCoordArr.length > 2 && mouseCoordArr.shift()
    const beforeGLCoord = { x: mouseCoordArr[0].x, y: mouseCoordArr[0].y }

    function assignTranslationCoord() {
      x = computedGLCoord.x
      y = computedGLCoord.y
    }

    ctx.setTransform(scale.current, 0, 0, scale.current, x, y)

    if (beforeGLCoord.x !== x || beforeGLCoord.y !== y) {
      console.log('변경 전', x, y)
      computedGLCoord.x = (x - beforeGLCoord.x) / scale.before + beforeGLCoord.x
      computedGLCoord.y = (y - beforeGLCoord.y) / scale.before + beforeGLCoord.y
      assignTranslationCoord()
    } else if (computedGLCoord.x) {
      assignTranslationCoord()
    }
    console.log('변경 후', x, y)
    ctx.translate(-x, -y)
  }
}
