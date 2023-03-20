import {
  canvas,
  imageCtx,
  imageCanvas,
} from "/src/components/canvas/canvasExport.js";
import getCanvasMousePosition from "/src/components/canvas/getMousePosition.js";

export default function ZoomEvent(img) {
  function wheelHandler(e) {
    e.preventDefault();

    imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

    // const minScale = 0.1;
    // const maxScale = 10;
    let scale = 1 + (e.deltaY < 0 ? 0.1 : -0.1);

    const mousePos = getCanvasMousePosition(e, canvas);
    let x = mousePos.x;
    let y = mousePos.y;

    imageCtx.translate(x, y);
    imageCtx.scale(scale, scale);
    imageCtx.translate(-x, -y);

    imageCtx.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
  }

  canvas.addEventListener("wheel", wheelHandler);
}
