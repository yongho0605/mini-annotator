const zoomStore = {
  scale: {
    before: 1,
    current: 1,
  },
  translate: {
    x: 0,
    y: 0,
  },
}

const zoomHandler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
    return true
  },
}

export default new Proxy(zoomStore, zoomHandler)
