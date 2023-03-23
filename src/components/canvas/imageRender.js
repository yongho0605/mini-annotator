import { imageCanvas, guideLineCanvas, imageCtx } from "./canvasExport.js";

export default function canvasImageRender() {
  const img = new Image();
  img.src = "/src/assets/images/mudeung.jpg";
  // img.src = "/src/assets/images/musk.jpeg";
  // img.src = "/src/assets/images/reuseableRocket.jpeg";

  img.onload = function () {
    if (img.width > img.height) {
      imageCanvas.width = img.width;
      imageCanvas.height = img.width;
      guideLineCanvas.width = img.width;
      guideLineCanvas.height = img.width;
      imageCanvas.style.objectFit = "cover";
    } else if (img.width < img.height) {
      imageCanvas.width = img.height;
      imageCanvas.height = img.height;
      guideLineCanvas.width = img.height;
      guideLineCanvas.height = img.height;
      imageCanvas.style.objectFit = "contain";
    }
    const x = (imageCanvas.width - img.width) / 2;
    const y = (imageCanvas.height - img.height) / 2;
    imageCtx.drawImage(img, x, y, img.width, img.height);
  };
}
