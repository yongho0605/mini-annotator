import getCanvasMousePosition from "/src/components/canvas/getCanvasMousePosition.js";
import {
  guideLineCanvas,
  guideLineCtx,
} from "/src/components/canvas/canvasExport.js";

export default function guideLine() {
  guideLineCanvas.addEventListener("mousemove", mousemove);
  guideLineCanvas.addEventListener("mouseleave", mouseleave);
  const canvasWidth = guideLineCanvas.width;
  const canvasHeight = guideLineCanvas.height;

  function mousemove(e) {
    const mousePos = getCanvasMousePosition(e, guideLineCanvas);
    let x = mousePos.x;
    let y = mousePos.y;

    const computedStyle = window.getComputedStyle(guideLineCanvas);

    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    guideLineCtx.beginPath();
    //FIXME: 지평선 좌표값 수정 필요
    guideLineCtx.moveTo(0, y);
    guideLineCtx.lineTo(canvasWidth, y);
    guideLineCtx.moveTo(x, 0);
    guideLineCtx.lineTo(x, canvasHeight);
    guideLineCtx.lineWidth = 2;
    guideLineCtx.closePath();
    guideLineCtx.stroke();
  }

  function mouseleave() {
    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight);
  }
}
