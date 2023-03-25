const imagePixelState = {
  defaultPixel: 1920,
  width: null,
  height: null,
};

const pixelHandler = {
  get(target, prop) {
    return target[prop];
  },
};

const useImagePixel = new Proxy(imagePixelState, pixelHandler);
export default useImagePixel;
