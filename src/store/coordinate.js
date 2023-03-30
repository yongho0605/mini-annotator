const coordinateState = {
  DOM: {
    x: 0,
    y: 0,
  },
  canvas: {
    x: 0,
    y: 0,
  },
  canvasOnImage: {
    x: 0,
    y: 0,
  },
  canvasTranslate: {
    x: 0,
    y: 0,
  },
  imageTranslate: {
    x: 0,
    y: 0,
  },
  canvasScale: {
    x: 0,
    y: 0,
  },
  canvasImageSize: {
    width: 0,
    height: 0,
  },
  naturalImageSize: {
    width: 0,
    height: 0,
  },
}

const coordinateHandler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
    return true
  },
}

export const coordinate = new Proxy(coordinateState, coordinateHandler)
