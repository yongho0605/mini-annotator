export default function getGuideLineWidth(props) {
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
