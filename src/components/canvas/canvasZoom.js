import { canvas, imageCtx } from "./canvasExport.js";

export default function ZoomEvent() {
  function wheelHandler(evt) {
    evt.preventDefault();

    const delta = evt.deltaY;
    console.log("휠 추적", delta);

    const scaleFactor = delta < 0 ? 1.1 : 0.9;
    imageCtx.scale(scaleFactor, scaleFactor);

    imageCtx.clearRect(0, 0, canvas.width, canvas.height);
  }

  canvas.addEventListener("wheel", wheelHandler);
}
