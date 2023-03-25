import useImagePixel from "/src/store/useImagePixel.js";
import guideLine from "/src/components/utils/guideLine.js";
import {
  imageCanvas,
  imageCtx,
  canvasObj,
} from "/src/components/canvas/canvasExport.js";

export default function canvasImageRender() {
  const img = new Image();
  img.src = "/src/assets/images/mudeung.jpg";
  // img.src = "/src/assets/images/musk.jpeg";
  // img.src = "/src/assets/images/reuseableRocket.jpeg";

  img.onload = function () {
    function setCanvasRatio() {
      Object.keys(canvasObj).forEach((canvas) => {
        canvasObj[canvas].width = img.width;
        canvasObj[canvas].height = img.height;
      });
    }
    setCanvasRatio();

    let { width, height } = useImagePixel;
    width = img.width;
    height = img.height;
    guideLine(img);
    const x = (imageCanvas.width - img.width) / 2;
    const y = (imageCanvas.height - img.height) / 2;
    imageCtx.drawImage(img, x, y, img.width, img.height);
  };
}
