export default function getCanvasMousePosition(e, canvas) {
  const canvasRect = canvas.getBoundingClientRect();

  const floorWidth = Math.floor(canvasRect.width);
  const floorHeight = Math.floor(canvasRect.height);
  const width = canvasRect.width;
  const height = canvasRect.height;
  let scaleX = canvas.width / width;
  let scaleY = canvas.height / height;
  let x = (e.clientX - canvasRect.left) * scaleX;
  let y = (e.clientY - canvasRect.top) * scaleY;

  if (floorWidth > floorHeight) {
    scaleY = canvas.height / (width - (width - height) / height);
    y =
      (e.clientY - canvasRect.top) * scaleY + (width - height + width / height);
    //FIXME: return값 고쳐줘야함.
  } else if (floorWidth < floorHeight) {
    scaleX = canvas.width / (height - (height - width) / width);
    x =
      (e.clientX - canvasRect.left) * scaleX +
      (height - width + height / width);
  }

  return {
    x: x,
    y: y,
  };
}
