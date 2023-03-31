const imgState = {
  source: null,
}

const imgHandler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
    return true
  },
}

export default new Proxy(imgState, imgHandler)
