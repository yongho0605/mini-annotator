import { pointerCanvas } from "/src/components/canvas/canvasExport.js";

export default function ZoomEvent(img) {
  function wheelHandler(e) {}

  pointerCanvas.addEventListener("wheel", wheelHandler);
}
