export function getGuideLineWidth(props) {
  function widthSize() {
    const { canvasWidth, rectWidth } = props
    const rectRatio = canvasWidth / rectWidth
    if (rectRatio < 2.6) {
      return rectRatio / 2
    } else {
      return rectRatio
    }
  }
  function heightSize() {
    const { canvasHeight, rectHeight } = props
    return canvasHeight / rectHeight
  }

  const lineWidth = props.name === 'width' ? widthSize() : heightSize()
  return Math.floor(lineWidth)
}

export function drawGuideLine(ctx, coordinates, canvasSize, lineWidth) {
  const { x, y, coordinate } = coordinates
  const moveTo = coordinate === 'x' ? [x, 0] : [0, y]
  const lineTo = coordinate === 'x' ? [x, canvasSize] : [canvasSize, y]
  ctx.beginPath()
  ctx.lineWidth = lineWidth
  ctx.moveTo(...moveTo)
  ctx.lineTo(...lineTo)
  ctx.stroke()
}
