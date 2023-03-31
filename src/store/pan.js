const panState = {
  spacePressed: false,
  mousePressed: false,
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

const pan = new Proxy(panState, panHandler)
export default pan
