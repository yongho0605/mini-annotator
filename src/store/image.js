const imageState = {
  source: null,
}

const imageHandler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
    return true
  },
}

export const image = new Proxy(imageState, imageHandler)
