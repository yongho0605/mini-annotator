import { ctx, canvas } from "./canvasExport.js";

export default function mousePointer() {
  function getCanvasMousePosition(evt, canvas) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (evt.clientX - rect.left) * scaleX,
      y: (evt.clientY - rect.top) * scaleY,
    };
  }

  function drawCrossLine(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  function moveMousePoint(evt) {
    const mousePosition = getCanvasMousePosition(evt, canvas);

    const x = mousePosition.x;
    const y = mousePosition.y;

    drawCrossLine(x, y);
  }

  function leaveMousePoint() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  //마우스가 canvas에 들어왔을 때 십자가 포인터 적용
  canvas.addEventListener("mousemove", moveMousePoint);

  //마우스가 canvas에서 떠났을 때 십자가 포인터 삭제
  canvas.addEventListener("mouseleave", leaveMousePoint);
}
