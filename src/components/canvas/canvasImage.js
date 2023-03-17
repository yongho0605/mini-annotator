import { ctx } from "./canvasShareVariable.js";

export default function canvasImageRender() {
  const img = new Image();
  img.src = "/src/assets/images/mudeung.jpeg";
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 1920, 900);
  };
}
