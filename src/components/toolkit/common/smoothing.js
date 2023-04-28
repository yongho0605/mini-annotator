import { $ } from '/src/modules/elements.js'

const smoothingEl = $('.smoothing')
const smoothing = {
  init: () => {
    function onKeyDown(evt) {}
    function onClick() {}

    smoothingEl.addEventListener('click', onClick)
    window.addEventListener('keydown', onKeyDown)
  },
}

export default smoothing
