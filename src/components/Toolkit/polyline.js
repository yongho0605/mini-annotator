export default function polyline() {
  const polylineNode = document.querySelector(".polyline");

  function onClick() {
    alert("폴리라인");
  }

  function keydownHandler(e) {
    if (e.keyCode === 76) {
      alert("폴리라인");
    }
  }

  window.addEventListener("keydown", keydownHandler);
  polylineNode.addEventListener("click", onClick);
}
