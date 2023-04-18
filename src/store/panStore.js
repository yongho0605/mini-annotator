const panStore = {
  init: { x: 0, y: 0 },
  moved: { x: 0, y: 0 },
}

const panHandler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
    return true
  },
}

export default new Proxy(panStore, panHandler)
