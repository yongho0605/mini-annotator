import { canvas, ctx } from "./canvasExport.js";

export default function canvasImageRender() {
  const img = new Image();
  img.src = "/src/assets/images/mudeung.jpeg";
  img.onload = function () {
    const x = (canvas.width - img.width) / 2;
    const y = (canvas.height - img.height) / 2;
    ctx.drawImage(img, x, y, img.width, img.height);
  };
}
