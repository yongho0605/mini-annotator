import { imageCtx, imageCanvas } from "/src/components/canvas/canvasExport.js";
import ZoomEvent from "/src/components/canvas/canvasZoom.js";

// FIXME: 왜 이렇게 되는지 생각하기
export default function canvasImageRender() {
  const img = new Image();
  img.src = "/src/assets/images/mudeung.jpeg";
  img.onload = function () {
    ZoomEvent(img);
    imageCtx.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
  };
}
