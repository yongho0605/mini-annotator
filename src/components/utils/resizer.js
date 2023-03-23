export default function resizeCanvas() {
  const resizer = document.querySelector(".resizer");
  const classSelector = document.getElementById("classSelector");
  const mainElem = document.querySelector("main");
  const annotator = document.querySelector(".annotator");

  resizer.addEventListener("mousedown", mousedown);
  function mousedown(e) {
    if (e.button === 0) {
      mainElem.addEventListener("mousemove", mousemove);
      mainElem.addEventListener("mouseup", remove);

      function mousemove(e) {
        let x = e.clientX;
        const minSize = 550;
        const maxSize = 1150;

        if (x < minSize) {
          x = minSize;
          return;
        } else if (x > maxSize) {
          x = maxSize;
          return;
        } else {
          // console.log(classSelector.style);
          classSelector.style.width = x + "px";
          annotator.style.width = x + "px";
        }
      }

      function remove() {
        mainElem.removeEventListener("mousemove", mousemove);
      }
    }
  }
}
