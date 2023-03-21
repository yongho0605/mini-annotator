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

    //FIXME: 최대 확대 및 축소 기능 제한 떨림 고치기
    const scaleX = imageCtx.getTransform().a;
    const translateX = imageCtx.getTransform().e;
    const translateY = imageCtx.getTransform().f;

    console.log(translateX, translateY);
    console.log(x);

    if (scaleX < minScale) {
      setTranslateScale(x, y, 1.1);
    } else if (scaleX > maxScale) {
      setTranslateScale(x, y, 0.9);
    } else {
      setTranslateScale(x, y, scale);
    }

    function setTranslateScale(x, y, scale) {
      imageCtx.translate(x, y);
      imageCtx.scale(scale, scale);
      imageCtx.translate(-x, -y);
    }

    imageCtx.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
  }

  pointerCanvas.addEventListener("wheel", wheelHandler);
}
