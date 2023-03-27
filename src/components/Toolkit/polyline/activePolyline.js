import useTools from '/src/store/useTools.js'

export default function polyline() {
  const polylineNode = document.querySelector('.polyline')

  function click() {
    useTools.polyline = true
    console.log('boundingbox', useTools.boundingbox)
    console.log('polygon', useTools.polygon)
    console.log('polyline', useTools.polyline)
    console.log('selector', useTools.selector)
    if (useTools.polyline) {
      alert('폴리라인')
    }
  }

  function keydown(e) {
    if (e.keyCode === 76) {
      useTools.polyline = true
      if (useTools.polyline) {
        alert('폴리라인')
      }
    }
  }

  window.addEventListener('keydown', keydown)
  polylineNode.addEventListener('click', click)
}
