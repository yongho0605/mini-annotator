import EventUtils from '/src/components/toolkit/utils/core/eventUtil.js'
import { $ } from '/src/modules/elements.js'

const selectorEl = $('.selector')
export default function selector() {
  const toolObj = { toolType: 'boundingBox', boolean: true }
  function onClick(evt) {
    const clickParameterObj = { evt, ...toolObj }
    EventUtils.onLeftMouseClick(clickParameterObj, () => {
      alert('선택도구')
    })
  }

  function keydown(evt) {
    const keydownParameterObj = {
      evt,
      ...toolObj,
      keyType: { en: 'v', ko: 'ㅍ' },
    }

    EventUtils.shortcutHandler(keydownParameterObj, () => {
      alert('선택도구')
    })
  }

  window.addEventListener('keydown', keydown)
  selectorEl.addEventListener('click', onClick)
}
