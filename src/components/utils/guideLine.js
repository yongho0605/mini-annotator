import {
  guideLineCanvas,
  guideLineCtx,
} from "/src/components/canvas/canvasExport.js";

export default function guideLine() {
  guideLineCanvas.addEventListener("mousemove", mousemove);

  function mousemove(e) {
    let x = e.clientX;
    let y = e.clientY;
    const canvasWidth = guideLineCanvas.width;
    const canvasHeight = guideLineCanvas.height;

    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    guideLineCtx.beginPath();
    guideLineCtx.moveTo(0, y);
    guideLineCtx.lineTo(canvasWidth, y);
    guideLineCtx.moveTo(x, 0);
    guideLineCtx.lineTo(x, canvasHeight);
    guideLineCtx.lineWidth = 2;
    guideLineCtx.stroke();
  }
}
