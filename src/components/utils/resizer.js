import { canvas } from "/src/components/canvas/canvasExport.js";

export default function resizeCanvas() {
  const resizer = document.querySelector(".resizer");
  const classSelector = document.getElementById("classSelector");

  resizer.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    if (e.button === 0) {
      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", remove);

      function mousemove(e) {
        let x = e.clientX;
        const minSize = 450;
        const maxSize = 1000;

        if (x < minSize) {
          x = minSize;
          return;
        } else if (x > maxSize) {
          x = maxSize;
          return;
        } else {
          classSelector.style.width = x + "px";
          canvas.style.width = x + "px";
        }
      }

      function remove() {
        window.removeEventListener("mousemove", mousemove);
      }
    }
  }
}
