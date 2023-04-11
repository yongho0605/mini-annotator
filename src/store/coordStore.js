const coordStore = {
  canvas: {
    x: 0,
    y: 0,
  },
  canvasOnImg: {
    x: 0,
    y: 0,
  },
  canvasTranslate: {
    x: 0,
    y: 0,
  },
  imgTranslate: {
    x: 0,
    y: 0,
  },
  canvasScale: {
    x: 0,
    y: 0,
  },
  imgScale: {
    x: 0,
    y: 0,
  },
  imgSize: {
    width: 0,
    height: 0,
  },
  naturalImgSize: {
    width: 0,
    height: 0,
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
