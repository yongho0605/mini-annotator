import useTools from '/src/store/useTools.js'

export default function activeBoundingbox() {
  const boundingboxNode = document.querySelector('.boundingBox')

  function click() {
    useTools.boundingbox = true
  }

  function keydown(e) {
    if (e.keyCode === 66) {
      useTools.boundingbox = true
    }
  }

  boundingboxNode.addEventListener('click', click)
  window.addEventListener('keydown', keydown)
}
