import {
  canvas,
  imageCtx,
  imageCanvas,
} from "/src/components/canvas/canvasExport.js";
import getCanvasMousePosition from "/src/components/canvas/getMousePosition.js";

export default function ZoomEvent(img) {
  function wheelHandler(e) {
    imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

    // const maxScale = 10;
    // const minScale = 0.1;
    // let currentScale = 1;

    // let scale = 1 + (e.deltaY < 0 ? 0.1 : -0.1);

    // let newScale = currentScale * scale;

    // if (newScale < minScale || newScale > maxScale) {
    //   return;
    // }
    // currentScale = newScale;

    const imageMatrix = imageCtx.getTransform();

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
