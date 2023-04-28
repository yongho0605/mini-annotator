import MouseButtons from '/src/modules/mouseButtons.js'
import ToolsState from '/src/Store/state/toolsState.js'

const distinguishSwitch = (toolParameterObj, callback) => {
  const { toolType, boolean } = toolParameterObj
  switch (toolType) {
    case 'boundingBox':
      ToolsState.boundingBox = boolean
      ToolsState.boundingBox && callback()
      break
    case 'keyPoint':
      ToolsState.keyPoint = boolean
      ToolsState.keyPoint && callback()
      break
    case 'polygon':
      ToolsState.polygon = boolean
      ToolsState.polygon && callback()
      break
    case 'polyline':
      ToolsState.polyline = boolean
      ToolsState.polyline && callback()
      break
    case 'selector':
      ToolsState.selector = boolean
      ToolsState.selector && callback()
    default:
      break
  }
}

const eventUtil = {
  onLeftMouseClick: (toolParameterObj, callback) => {
    if (toolParameterObj.evt.button === MouseButtons.LEFT) {
      distinguishSwitch(toolParameterObj, callback)
    }
  },

  shortcutHandler: (toolParameterObj, callback) => {
    const { evt, keyType } = toolParameterObj
    if (evt.key === keyType.en || evt.key === keyType.ko) {
      distinguishSwitch(toolParameterObj, callback)
    }
  },
}
export default eventUtil
