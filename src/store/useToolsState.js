const toolsState = {
  boundingbox: false,
  keypoint: false,
  polygon: false,
  polyline: false,
  selector: false,
  panning: false,
};

const toolHandler = {
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

const useToolsState = new Proxy(toolsState, toolHandler);
export default useToolsState;
