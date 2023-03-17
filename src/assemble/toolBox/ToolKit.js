import boundingBox from "/src/components/Toolkit/boundingBox.js";
import keyPoint from "/src/components/Toolkit/keyPoint.js";
import outPost from "/src/components/Toolkit/outPost.js";
import polygon from "/src/components/Toolkit/polygon.js";
import polyline from "/src/components/Toolkit/polyline.js";
import selector from "/src/components/Toolkit/selector.js";

export default function Toolkit() {
  outPost();
  selector();
  boundingBox();
  polygon();
  polyline();
  keyPoint();
}
