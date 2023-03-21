import boundingBox from "/src/components/Toolkit/boundingbox/activeBoundingBox.js";
import keyPoint from "/src/components/Toolkit/keyPoint/activeKeyPoint.js";
import outPost from "/src/components/Toolkit/outPost.js";
import polygon from "/src/components/Toolkit/polygon/activePolygon.js";
import polyline from "/src/components/Toolkit/polyline/activePolyline.js";
import selector from "/src/components/Toolkit/selector/activeSelector.js";

export default function toolkit() {
  outPost();
  selector();
  boundingBox();
  polygon();
  polyline();
  keyPoint();
}
