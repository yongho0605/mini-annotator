export function getGuideLineWidth(props) {
  const { canvas, rect } = props
  function widthSize() {
    const rectRatio = canvas.width / rect.width
    if (rectRatio < 2.6) {
      return rectRatio / 2
    } else {
      return rectRatio
    }
  }
  function heightSize() {
    return canvas.height / rect.height
  }

  return {
    verticalLineWidth: Math.floor(widthSize()),
    horizontalLineWidth: Math.floor(heightSize()),
  }
}

export function drawGuideLine(ctx, coordinate, size, crossLine) {
  const { x, y } = coordinate
  const { canvas } = size

  Object.keys(crossLine).forEach((key) => {
    let moveTo = null
    let lineTo = null
    switch (key) {
      case 'verticalLineWidth':
        moveTo = [x, 0]
        lineTo = [x, canvas.width]
        break
      case 'horizontalLineWidth':
        moveTo = [0, y]
        lineTo = [canvas.height, y]
        break
      default:
        break
    }
    ctx.beginPath()
    ctx.lineWidth = crossLine[key]
    ctx.moveTo(...moveTo)
    ctx.lineTo(...lineTo)
    ctx.stroke()
  })
}
