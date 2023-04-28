import EventUtils from '/src/components/toolkit/utils/core/eventUtil.js'
import { $ } from '/src/modules/elements.js'

const boundingBoxEl = $('.boundingBox')
export default function applyBoundingBox() {
  const toolObj = { toolType: 'boundingBox', boolean: true }
  function onClick(evt) {
    const clickParameterObj = { evt, ...toolObj }
    EventUtils.onLeftMouseClick(clickParameterObj, () => {
      alert('바운딩박스')
    })
  }

  function onKeyDown(evt) {
    const keydownParameterObj = {
      evt,
      ...toolObj,
      keyType: { en: 'b', ko: 'ㅠ' },
    }
    EventUtils.shortcutHandler(keydownParameterObj, () => {
      alert('바운딩박스')
    })
  }

  boundingBoxEl.addEventListener('click', onClick)
  window.addEventListener('keydown', onKeyDown)
}
