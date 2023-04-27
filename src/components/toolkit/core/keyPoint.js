import { $ } from '/src/modules/elements.js'
import ToolsState from '/src/Store/state/toolsState.js'

export default function keyPoint() {
  const keyPointEl = $('.keyPoint')
  function onClick() {
    ToolsState.keyPoint = true
    if (ToolsState.keyPoint) {
      alert('키포인트')
    }
  }

  function keydown(e) {
    if (e.key === 'k' || e.key === 'ㅏ') {
      ToolsState.keyPoint = true
      if (ToolsState.keyPoint) {
        alert('키포인트')
      }
    }
  }

  keyPointEl.addEventListener('click', onClick)
  window.addEventListener('keydown', keydown)
}
