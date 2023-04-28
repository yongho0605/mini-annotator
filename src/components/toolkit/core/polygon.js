import { $ } from '/src/modules/elements.js'
import EventUtils from '/src/components/toolkit/utils/core/eventUtil.js'

const polygonEl = $('.polygon')
const toolObj = { toolType: 'boundingBox', boolean: true }
export default function polygon() {
  function onClick(evt) {
    const clickParameterObj = { evt, ...toolObj }
    EventUtils.onLeftMouseClick(clickParameterObj, () => {
      alert('폴리곤')
    })
  }

  function keydown(evt) {
    const keydownParameterObj = {
      evt,
      ...toolObj,
      keyType: { en: 'p', ko: 'ㅔ' },
    }

    EventUtils.shortcutHandler(keydownParameterObj, () => {
      alert('폴리곤')
    })
  }

  window.addEventListener('keydown', keydown)
  polygonEl.addEventListener('click', onClick)
}
