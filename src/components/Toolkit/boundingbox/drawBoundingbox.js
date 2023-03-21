import getCanvasMousePosition from "/src/components/canvas/getMousePosition.js";
import {
  boundingBoxCanvas,
  boundingBoxCtx,
  pointerCanvas,
} from "/src/components/canvas/canvasExport.js";

export default function drawBoundingBox() {
  let isDrawing = false;
  let rectangles = [];
  let activeRectangle = null;
  let offsetX = 0;
  let offsetY = 0;
  class Rectangle {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    draw() {
      boundingBoxCtx.clearRect(this.x, this.y, this.width, this.height);
      boundingBoxCtx.strokeStyle = "lightGreen";
      boundingBoxCtx.lineWidth = 3;
      boundingBoxCtx.strokeRect(this.x, this.y, this.width, this.height);
    }

    contains(x, y) {
      return (
        x >= this.x &&
        x <= this.x + this.width &&
        y >= this.y &&
        y <= this.y + this.height
      );
    }

    move(dx, dy) {
      boundingBoxCtx.clearRect(dx, dy, this.width, this.height);
      this.x += dx;
      this.y += dy;
    }
  }

  function redraw() {
    boundingBoxCtx.clearRect(0, 0, boundingBoxCtx.width, boundingBoxCtx.height);
    rectangles.forEach((rect) => rect.draw());
  }

  function mousedown(e) {
    const mousePos = getCanvasMousePosition(e, boundingBoxCanvas);
    offsetX = mousePos.x;
    offsetY = mousePos.y;

    activeRectangle = rectangles.find((rect) =>
      rect.contains(offsetX, offsetY)
    );

    if (!activeRectangle) {
      isDrawing = true;
      activeRectangle = new Rectangle(
        offsetX,
        offsetY,
        boundingBoxCtx.width,
        boundingBoxCtx.height
      );
      rectangles.push(activeRectangle);
    }
  }

  function mousemove(e) {
    if (!isDrawing && !activeRectangle) return;

    const mousePos = getCanvasMousePosition(e, boundingBoxCanvas);
    const x = mousePos.x;
    const y = mousePos.y;

    if (isDrawing) {
      activeRectangle.width = x - offsetX;
      activeRectangle.height = y - offsetY;
    } else {
      const dx = x - offsetX;
      const dy = y - offsetY;
      offsetX = x;
      offsetY = y;
      activeRectangle.move(dx, dy);
    }

    redraw();
  }

  function mouseup() {
    isDrawing = false;
    activeRectangle = null;
  }

  pointerCanvas.addEventListener("mousedown", mousedown);
  pointerCanvas.addEventListener("mousemove", mousemove);
  pointerCanvas.addEventListener("mouseup", mouseup);
}
