import ToolsState from '/src/store/tools.js'

export default function activeBoundingBox() {
  const boundingBoxEl = document.querySelector('.boundingBox')

  function onClick() {
    ToolsState.boundingBox = true
    if (ToolsState.boundingBox) {
      alert('바운딩박스')
    }
  }

  function onKeyDown(e) {
    ToolsState.boundingBox = true
    if (e.key === 'b' || e.key === 'ㅠ') {
      if (ToolsState.boundingBox) {
        alert('바운딩박스')
      }
    }
  }

  boundingBoxEl.addEventListener('click', onClick)
  window.addEventListener('keydown', onKeyDown)
}
