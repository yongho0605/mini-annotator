import EventUtils from '/src/components/toolkit/utils/core/eventUtil.js'
import { $ } from '/src/modules/elements.js'

const polylineEl = $('.polyline')
export default function polyline() {
  const toolObj = { toolType: 'boundingBox', boolean: true }
  function onClick(evt) {
    const clickParameterObj = { evt, ...toolObj }
    EventUtils.onLeftMouseClick(clickParameterObj, () => {
      alert('폴리라인')
    })
  }

  function keydown(evt) {
    const keydownParameterObj = {
      evt,
      ...toolObj,
      keyType: { en: 'l', ko: 'ㅣ' },
    }

    EventUtils.shortcutHandler(keydownParameterObj, () => {
      alert('폴리라인')
    })
  }

  window.addEventListener('keydown', keydown)
  polylineEl.addEventListener('click', onClick)
}
