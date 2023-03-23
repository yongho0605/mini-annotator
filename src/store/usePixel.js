const pixelState = {
  imagePixel: null,
};

const pixelHandler = {
  get(target, prop) {
    return target[prop];
  },
  set(target, prop, value) {
    Object.keys(target).forEach((key) => {
      target[key] = false;
    });
    target[prop] = value;
    return true;
  },
};

export const usePixel = new Proxy(pixelState, pixelHandler);
