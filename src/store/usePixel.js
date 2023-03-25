const pixelState = {
  imagePixel: null,
};

const pixelHandler = {
  get(target, prop) {
    return target[prop];
  },
  set(target, prop, value) {
    return true;
  },
};

export const usePixel = new Proxy(pixelState, pixelHandler);
