export default function getCanvasMousePosition(e, canvas) {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / canvasRect.width;
  const scaleY = canvas.height / canvasRect.height;

  const computedStyle = window.getComputedStyle(canvas, null);

  return {
    x: (e.clientX - canvasRect.left) * scaleX,
    y: (e.clientY - canvasRect.top) * scaleY,
  };
}
