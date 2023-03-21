import drawBoundingBox from "/src/components/Toolkit/boundingbox/drawBoundingbox.js";

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

export const useToolsState = new Proxy(toolsState, toolHandler);
