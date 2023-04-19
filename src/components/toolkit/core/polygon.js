import ToolsState from '/src/Store/state/toolsState.js'

export default function polygon() {
  const polygonEl = document.querySelector('.polygon')

  function onClick() {
    ToolsState.polygon = true
    if (ToolsState.polygon) {
      alert('폴리곤')
    }
  }

  function keydown(e) {
    if (e.key === 'p' || e.key === 'ㅔ') {
      ToolsState.polygon = true
      if (ToolsState.polygon) {
        alert('폴리곤')
      }
    }
  }

  window.addEventListener('keydown', keydown)
  polygonEl.addEventListener('click', onClick)
}
