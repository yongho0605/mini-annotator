import useTools from '/src/store/useTools.js'

export default function keyPoint() {
  const keyPoint = document.querySelector('.keyPoint')
  function click() {
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

  keyPoint.addEventListener('click', click)
  window.addEventListener('keydown', keydown)
}
