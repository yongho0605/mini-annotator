import canvas from "/src/assemble/canvas/canvas.js";
import toolkit from "/src/assemble/toolBox/toolKit.js";
import shortcut from "/src/assemble/utils/shortcut.js";

export default function app() {
  toolkit();
  canvas();
  shortcut();
}
