import Canvas from "/src/assemble/canvas/Canvas.js";
import Toolkit from "/src/assemble/toolBox/ToolKit.js";
import Shortcut from "/src/assemble/utils/shortcut.js";

export default function app() {
  Toolkit();
  Canvas();
  Shortcut();
}
