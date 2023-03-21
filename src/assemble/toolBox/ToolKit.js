import boundingBox from "/src/components/Toolkit/boundingbox/activeBoundingBox.js";
import keyPoint from "/src/components/Toolkit/keyPoint/keyPoint.js";
import outPost from "/src/components/Toolkit/outPost.js";
import polygon from "/src/components/Toolkit/polygon/polygon.js";
import polyline from "/src/components/Toolkit/polyline/polyline.js";
import selector from "/src/components/Toolkit/selector/selector.js";

export default function toolkit() {
  outPost();
  selector();
  boundingBox();
  polygon();
  polyline();
  keyPoint();
}
