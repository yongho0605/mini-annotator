const guideLine = {
  getWidth: (size) => {
    const { canvas, rect } = size
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
  },

  draw: (ctx, coordinate, size, crossLine) => {
    const { x, y } = coordinate
    const { canvas } = size

    Object.keys(crossLine).forEach((key) => {
      let moveTo = null
      let lineTo = null
      switch (key) {
        case 'verticalLineWidth':
          moveTo = [x, 0]
          lineTo = [x, canvas.height]
          break
        case 'horizontalLineWidth':
          moveTo = [0, y]
          lineTo = [canvas.width, y]
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
  },
}

export default guideLine
