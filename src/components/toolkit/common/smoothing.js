import { $ } from '/src/modules/elements.js'
import { canvas, ctx } from '/src/components/canvas/canvasExport.js'
import { applyChangesOnImageSmooth } from '../utils/common/smoothUtil.js'
import MouseButtons from '/src/modules/mouseButtons.js'

const smoothingEl = $('.smoothing')
let toggle = false
const toggleHandler = (boolean) => (toggle = boolean)

export default function applySmoothing(img) {
  function onClick(evt) {
    if (evt.button === MouseButtons.LEFT) {
      toggleHandler(!toggle)
      alert(`이미지 부드럽게하기 ${toggle ? 'on' : 'off'}`)
      const parameterObj = { img, canvas: canvas.img, ctx: ctx.img, toggle }
      applyChangesOnImageSmooth(parameterObj)
    }
  }
  function onKeyDown(evt) {
    if (evt.key === 'a' || evt.key === 'ㅁ') {
      toggleHandler(!toggle)
      alert(`이미지 부드럽게하기 ${toggle ? 'on' : 'off'}`)
      const parameterObj = { img, canvas: canvas.img, ctx: ctx.img, toggle }
      applyChangesOnImageSmooth(parameterObj)
    }
  }

  smoothingEl.addEventListener('click', onClick)
  window.addEventListener('keydown', onKeyDown)
}
