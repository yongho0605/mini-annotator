const pixelState = {
  defaultPixel: 1920,
}

const pixelHandler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value
    return true
  },
}

const useTools = new Proxy(pixelState, pixelHandler)
export default useTools
