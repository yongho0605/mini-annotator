import useTools from '/src/store/useTools.js'

export default function polygon() {
  const polygonEl = document.querySelector('.polygon')

  function onClick() {
    useTools.polygon = true
    if (useTools.polygon) {
      alert('폴리곤')
    }
  }

  function keydown(e) {
    if (e.keyCode === 80) {
      useTools.polygon = true
      if (useTools.polygon) {
        alert('폴리곤')
      }
    }
  }

  window.addEventListener('keydown', keydown)
  polygonEl.addEventListener('click', onClick)
}
