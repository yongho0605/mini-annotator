import drawBoundingBox from "./drawBoundingbox.js";

export default function activeBoundingbox() {
  const boundingBoxNode = document.querySelector(".boundingBox");

  function click() {
    alert("바운딩박스");
    drawBoundingBox();
  }

  function keydown(e) {
    if (e.keyCode === 66) {
      alert("바운딩박스");
      drawBoundingBox();
    }
  }

  boundingBoxNode.addEventListener("click", click);
  window.addEventListener("keydown", keydown);
}
