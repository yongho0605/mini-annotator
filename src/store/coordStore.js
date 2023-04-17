const coordStore = {
  canvas: {
    guideLine: {
      x: 0,
      y: 0,
    },
    translation: {
      x: 0,
      y: 0,
    },
    scale: {
      x: 0,
      y: 0,
    },
  },
  img: {
    guideLine: {
      x: 0,
      y: 0,
    },
    translation: {
      x: 0,
      y: 0,
    },
    scale: {
      x: 0,
      y: 0,
    },
    size: {
      width: 0,
      height: 0,
    },
    naturalSize: {
      width: 0,
      height: 0,
    },
    scaledSize: {
      width: 0,
      height: 0,
    },
    scaledTranslation: {
      x: 0,
      y: 0,
    },
  },
}

const onCoordChangeHandler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
    return true
  },
}

export default new Proxy(coordStore, onCoordChangeHandler)
