import { imageCtx } from "./canvasExport.js";
import ZoomEvent from "./canvasZoom.js";

export default function canvasImageRender() {
  const img = new Image();
  img.src = "/src/assets/images/mudeung.jpeg";
  img.onload = function () {
    ZoomEvent();
    imageCtx.drawImage(img, 0, 0, 1920, 1080);
  };
}
