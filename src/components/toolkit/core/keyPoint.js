import EventUtils from '/src/components/toolkit/utils/core/eventUtil.js'
import { $ } from '/src/modules/elements.js'

const keyPointEl = $('.keyPoint')
export default function keyPoint() {
  const toolObj = { toolType: 'boundingBox', boolean: true }
  function onClick(evt) {
    const clickParameterObj = { evt, ...toolObj }
    EventUtils.onLeftMouseClick(clickParameterObj, () => {
      alert('키포인트')
    })
  }

  function keydown(evt) {
    const keydownParameterObj = {
      evt,
      ...toolObj,
      keyType: { en: 'k', ko: 'ㅏ' },
    }

    EventUtils.shortcutHandler(keydownParameterObj, () => {
      alert('키포인트')
    })
  }

  keyPointEl.addEventListener('click', onClick)
  window.addEventListener('keydown', keydown)
}
