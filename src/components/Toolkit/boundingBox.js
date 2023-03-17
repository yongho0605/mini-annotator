export default function boundingBox() {
  const boundingBoxNode = document.querySelector(".boundingBox");
  function onClick() {
    alert("바운딩박스");
  }

  function keydownHandler(e) {
    if (e.keyCode === 66) {
      alert("바운딩박스");
    }
  }

  boundingBoxNode.addEventListener("click", onClick);
  window.addEventListener("keydown", keydownHandler);
}
