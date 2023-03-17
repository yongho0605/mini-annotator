import { imageCtx } from "./canvasExport.js";

export default function canvasImageRender() {
  const img = new Image();
  img.src = "/src/assets/images/mudeung.jpeg";
  img.onload = function () {
    imageCtx.drawImage(img, 0, 0, 1920, 1080);
  };
}
