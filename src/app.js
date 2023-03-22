import fn from "/src/assemble/utils/fn.js";
import canvas from "/src/assemble/canvas/canvas.js";
import toolkit from "/src/assemble/toolkit/toolkit.js";

export default function app() {
  toolkit();
  canvas();
  fn();
}
