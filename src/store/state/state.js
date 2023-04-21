const state = {
  pressed: { space: false, mouse: false },
}

const stateHandler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
    return true
  },
}

export default new Proxy(state, stateHandler)
