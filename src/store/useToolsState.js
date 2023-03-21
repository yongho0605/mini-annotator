const toolsState = {
  boundingbox: false,
  keypoint: false,
  polygon: false,
  polyline: false,
  selector: false,
};

const toolHandler = {
  get(target, prop) {
    return target[prop];
  },
};

export const useToolsState = new Proxy(toolsState, toolHandler);
