import getCanvasMousePosition from "/src/components/canvas/getMousePosition.js";
import {
  pointerCanvas,
  pointerCtx,
} from "/src/components/canvas/canvasExport.js";

export default function mousePointer() {
  function drawCrossLine(x, y) {
    pointerCtx.clearRect(0, 0, pointerCanvas.width, pointerCanvas.height);

    pointerCtx.beginPath();
    pointerCtx.moveTo(x, 0);
    pointerCtx.lineTo(x, pointerCanvas.height);
    pointerCtx.moveTo(0, y);
    pointerCtx.lineTo(pointerCanvas.width, y);
    pointerCtx.stroke();
  }

  function moveMousePoint(evt) {
    const mousePosition = getCanvasMousePosition(evt, pointerCanvas);

    const x = mousePosition.x;
    const y = mousePosition.y;

    drawCrossLine(x, y);
  }

  function leaveMousePoint() {
    pointerCtx.clearRect(0, 0, pointerCanvas.width, pointerCanvas.height);
  }

  //마우스가 canvas에 들어왔을 때 십자가 포인터 적용
  pointerCanvas.addEventListener("mousemove", moveMousePoint);

  //마우스가 canvas에서 떠났을 때 십자가 포인터 삭제
  pointerCanvas.addEventListener("mouseleave", leaveMousePoint);
}
