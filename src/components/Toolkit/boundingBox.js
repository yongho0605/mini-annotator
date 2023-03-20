export default function boundingBox() {
  const boundingBoxNode = document.querySelector(".boundingBox");

  function drawBoundingBox() {}

  function click() {
    alert("바운딩박스");
  }

  function keydown(e) {
    if (e.keyCode === 66) {
      alert("바운딩박스");
    }
  }

  boundingBoxNode.addEventListener("click", click);
  window.addEventListener("keydown", keydown);
}
