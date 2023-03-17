import { canvas, ctx } from "./canvasShareVariable.js";

function moveHandler(evt) {
  const x = evt.x;
  const y = evt.y;

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
}

export default function chaseMousePointer() {
  canvas.addEventListener("mousemove", moveHandler);
}
