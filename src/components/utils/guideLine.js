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

    const rect = guideLineCanvas.getBoundingClientRect();

    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    guideLineCtx.beginPath();
    guideLineCtx.lineWidth = 1;
    console.log("지평선", guideLineCtx.lineWidth);
    guideLineCtx.moveTo(0, y);
    guideLineCtx.lineTo(canvasWidth, y);
    guideLineCtx.stroke();

    //수평선
    /*FIXME: 가이드라인 수평선, 지평선 구분하고 수평선부분이 Rect.width가 바뀌어도 lineWidth 2를 유지하게 해야함.
     내 생각으로는 Proxy이용해서 변수 상태관리 해주면서 계산식 짜서 넣으면 될듯.*/
    guideLineCtx.beginPath();
    guideLineCtx.lineWidth = Math.ceil(rect.height / rect.width);
    console.log("수평선", guideLineCtx.lineWidth);
    guideLineCtx.moveTo(x, 0);
    guideLineCtx.lineTo(x, canvasHeight);
    guideLineCtx.closePath();
    guideLineCtx.stroke();
  }

  function mouseleave() {
    guideLineCtx.clearRect(0, 0, canvasWidth, canvasHeight);
  }
}
