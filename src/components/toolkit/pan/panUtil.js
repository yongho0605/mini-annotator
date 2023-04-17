import CoordStore from '/src/store/coordStore.js'

export function applyChangesOnPan(panCoord, currentGLCoord, ctx) {
  let { x, y } = currentGLCoord
  if (panCoord.moved.x) {
    //FIXME: 저녁먹고와서 아래 재할당에 대한 이해도 높이기
    x = panCoord.moved.x + (x - panCoord.init.x)
    y = panCoord.moved.y + (y - panCoord.init.y)
  } else {
    x = x - panCoord.init.x
    y = y - panCoord.init.y
  }
  ctx.setTransform(CoordStore.canvas.scale.x, 0, 0, CoordStore.canvas.scale.y, x, y)
}
