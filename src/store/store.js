const Store = {
  canvas: {
    guideLine: { x: 0, y: 0 },
    translation: { x: 0, y: 0 },

    scale: 0,
  },
  img: {
    guideLine: { x: 0, y: 0 },
    translation: { x: 0, y: 0 },
    scale: { x: 0, y: 0 },
    size: { width: 0, height: 0 },
    naturalSize: { width: 0, height: 0 },
    scaledSize: { width: 0, height: 0 },
    scaledTranslation: { x: 0, y: 0 },
  },
  zoom: {
    scale: { before: 1, current: 1 },
    panedTranslation: { x: 0, y: 0 },
    panedDistance: { x: 0, y: 0 },
  },
  pan: {
    initCoord: { x: 0, y: 0 },
    initTransform: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
    translate: { x: 0, y: 0 },
    movedArr: [],
  },
}

const storeChangeHandler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
    return true
  },
}

export default new Proxy(Store, storeChangeHandler)
