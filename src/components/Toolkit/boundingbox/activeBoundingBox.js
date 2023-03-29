import useTools from '/src/store/useTools.js'

export default function activeBoundingbox() {
  const boundingboxEl = document.querySelector('.boundingBox')

  function onClick() {
    useTools.boundingbox = true
  }

  function keydown(e) {
    if (e.keyCode === 66) {
      useTools.boundingbox = true
    }
  }

  boundingboxEl.addEventListener('click', onClick)
  window.addEventListener('keydown', keydown)
}
