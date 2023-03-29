import useTools from '/src/store/useTools.js'

export default function keyPoint() {
  const keyPointEl = document.querySelector('.keyPoint')
  function onClick() {
    useTools.keypoint = true
    if (useTools.keypoint) {
      alert('키포인트')
    }
  }

  function keydown(e) {
    if (e.keyCode === 79) {
      useTools.keypoint = true
      if (useTools.keypoint) {
        alert('키포인트')
      }
    }
  }

  keyPointEl.addEventListener('click', onClick)
  window.addEventListener('keydown', keydown)
}
