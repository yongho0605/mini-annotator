import { canvas, ctx } from '/src/components/canvas/canvasExport.js'
import PanUtils from '/src/components/toolkit/utils/common/panUtil.js'
import Store from '/src/store/store.js'
import State from '/src/store/state/state.js'
import Arithmetic from '/src/modules/Arithmetic.js'

const { zoom } = Store
const { pressed } = State

const pan = {
  init(img) {
    function removeEvent() {
      canvas.guideLine.removeEventListener('mousemove', onMouseMove)
    }
    function onMouseMove(evt) {
      ctx.img.clearRect(-10, -10, canvas.img.width + 20, canvas.img.height + 20)
      const currentGLCoord = canvas.getMousePos(evt, canvas.img)
      PanUtils.applyChangesOnPan(currentGLCoord, ctx.img)
      ctx.img.drawImage(
        img,
        Store.img.translation.x,
        Store.img.translation.y,
        Store.img.size.width,
        Store.img.size.height
      )
    }
    function checkPressed() {
      if (pressed.space && pressed.mouse) {
        canvas.guideLine.addEventListener('mousemove', onMouseMove)
      }
    }
    function onMouseDown(evt) {
      const mouseParameterObj = { evt, boolean: true }
      PanUtils.innerMouseEventHandler(mouseParameterObj, () => {
        Store.pan.initCoord = canvas.getMousePos(evt, canvas.img)
        pressed.space && (Store.pan.initTransform = ctx.img.getTransform())
        checkPressed()
      })
    }
    function onMouseUp(evt) {
      const mouseParameterObj = { evt, boolean: false }
      PanUtils.innerMouseEventHandler(mouseParameterObj, () => {
        if (pressed.space && (zoom.panedDistance.x || zoom.panedDistance.y)) {
          const conditionIdentifier = (axis) =>
            Store.pan.movedArr.length >= 1 &&
            Store.pan.movedArr.at(-1)[axis] === zoom.panedDistance[axis]
          conditionIdentifier('x') && (zoom.panedDistance.x = 0)
          conditionIdentifier('y') && (zoom.panedDistance.y = 0)
          Store.pan.movedArr.push({ ...zoom.panedDistance })
          const panedTranslation = {
            x: Arithmetic.sum2DCoord(Store.pan.movedArr, 'x'),
            y: Arithmetic.sum2DCoord(Store.pan.movedArr, 'y'),
          }
          Store.zoom.panedTranslation = panedTranslation
        }
        removeEvent()
      })
    }
    function onKeyDown(evt) {
      const keyParameterObj = { evt, boolean: true }
      PanUtils.innerKeyEventHandler(keyParameterObj, checkPressed())
    }
    function onKeyUp(evt) {
      const keyParameterObj = { evt, boolean: false }
      PanUtils.innerKeyEventHandler(keyParameterObj, removeEvent())
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    canvas.guideLine.addEventListener('mousedown', onMouseDown)
    canvas.guideLine.addEventListener('mouseup', onMouseUp)
  },
}
export default pan
