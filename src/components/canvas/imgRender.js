import applyAssembledCommonTools from '/src/assemble/toolkit/common.js'

export default function imgCanvasRenderer() {
  const img = new Image()
  img.src = '/src/assets/images/elonMusk.jpeg'
  img.onload = () => {
    applyAssembledCommonTools(img)
  }
}
