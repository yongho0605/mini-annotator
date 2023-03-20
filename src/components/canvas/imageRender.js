import { imageCtx } from "/src/components/canvas/canvasExport.js";
import ZoomEvent from "/src/components/canvas/canvasZoom.js";

export default function canvasImageRender() {
  const img = new Image();
  img.src = "/src/assets/images/mudeung.jpeg";
  img.onload = function () {
    ZoomEvent(img);
    imageCtx.drawImage(img, 0, 0, 1920, 1080);
  };
}
