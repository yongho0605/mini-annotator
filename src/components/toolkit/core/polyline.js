import { $ } from '/src/components/modules/elements.js'
import ToolsState from '/src/Store/state/toolsState.js'

export default function polyline() {
  const polylineEl = $('.polyline')

  function onClick() {
    ToolsState.polyline = true
    console.log('boundingBox', ToolsState.boundingBox)
    console.log('polygon', ToolsState.polygon)
    console.log('polyline', ToolsState.polyline)
    console.log('selector', ToolsState.selector)
    if (ToolsState.polyline) {
      alert('폴리라인')
    }
  }

  function keydown(e) {
    if (e.key === 'l' || e.key === 'ㅣ') {
      ToolsState.polyline = true
      if (ToolsState.polyline) {
        alert('폴리라인')
      }
    }
  }

  window.addEventListener('keydown', keydown)
  polylineEl.addEventListener('click', onClick)
}
