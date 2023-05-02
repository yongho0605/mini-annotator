import Store from '/src/store/store.js'

export function applyChangesOnImageSmooth(parameterObj) {
  const { img, canvas, ctx, toggle } = parameterObj
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.imageSmoothingEnabled = toggle
  ctx.drawImage(
    img,
    Store.img.translation.x,
    Store.img.translation.y,
    Store.img.size.width,
    Store.img.size.height
  )
}
