import { $ } from '/src/modules/elements.js'
import MouseButtons from '/src/modules/mouseButtons.js'

const smoothingEl = $('.smoothing')
let toggle = false
const toggleHandler = (boolean) => (toggle = boolean)

export default function applySmoothing() {
  function onClick(evt) {
    if (evt.button === MouseButtons.LEFT) {
      toggleHandler(!toggle)
      const toggleCondition = toggle ? 'on' : 'off'
      alert(`이미지 부드럽게하기 ${toggleCondition}`)
    }
  }
  function onKeyDown(evt) {
    if (evt.key === 'a' || evt.key === 'ㅁ') {
      toggleHandler(!toggle)
      const toggleCondition = toggle ? 'on' : 'off'
      alert(`이미지 부드럽게하기 ${toggleCondition}`)
    }
  }

  smoothingEl.addEventListener('click', onClick)
  window.addEventListener('keydown', onKeyDown)
}
