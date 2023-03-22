import { imageCanvas, imageCtx } from "./canvasExport.js";

export default function canvasImageRender() {
  const img = new Image();
  img.src = "/src/assets/images/mudeung.jpg";
  img.onload = function () {
    const x = (imageCanvas.width - img.width) / 2;
    const y = (imageCanvas.height - img.height) / 2;
    imageCtx.drawImage(img, x, y, img.width, img.height);
  };
}
