import { canvasObj } from "/src/components/canvas/canvasExport.js";

const { pointerCanvas } = canvasObj;

export default function ZoomEvent() {
  function wheelHandler(e) {}

  pointerCanvas.addEventListener("wheel", wheelHandler);
}
