import {
  pointerCanvas,
  imageCtx,
  imageCanvas,
} from "/src/components/canvas/canvasExport.js";
import getCanvasMousePosition from "/src/components/canvas/getMousePosition.js";

export default function ZoomEvent(img) {
  function wheelHandler(e) {
    imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

    const mousePos = getCanvasMousePosition(e, pointerCanvas);
    let x = mousePos.x;
    let y = mousePos.y;

    const maxScale = 20;
    const minScale = 0.1;

    let scale = 1 + (e.deltaY < 0 ? 0.1 : -0.1);

    // console.log(divicepixelratio);

    //TODO: 메트릭스 값을 이용해서 확대 축소 제한 가능
    const scaleX = imageCtx.getTransform().a;
    const rotateX = imageCtx.getTransform().b;
    const translateX = imageCtx.getTransform().c;

    console.log(scaleX, rotateX, translateX);

    if (scaleX < minScale) {
      setTranslateScale(x, y, 1.15);
    } else if (scaleX > maxScale) {
      setTranslateScale(x, y, 0.9);
    }

    // if (maxScale > imageMatrix > minScale) {
    //   scale = 1 + (e.deltaY < 0 ? 0.1 : -0.1);
    // }

    function setTranslateScale(x, y, scale) {
      imageCtx.translate(x, y);
      imageCtx.scale(scale, scale);
      imageCtx.translate(-x, -y);
    }
    setTranslateScale(x, y, scale);

    imageCtx.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
  }

  pointerCanvas.addEventListener("wheel", wheelHandler);
}
