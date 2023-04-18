const PressedState = { space: false, mouse: false }

const pressedStateHandler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
    return true
  },
}

export default new Proxy(PressedState, pressedStateHandler)
