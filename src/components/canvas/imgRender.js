import applyAssembledCommonTools from '/src/assemble/toolkit/common.js'

export default function imgCanvasRenderer() {
  const img = new Image()
  // img.src = '/src/assets/images/mudeung.jpg'
  // img.src = '/src/assets/images/musk.jpeg'
  img.src = '/src/assets/images/tesla_model_S_Plaid.webp'
  img.onload = () => {
    applyAssembledCommonTools(img)
  }
}
