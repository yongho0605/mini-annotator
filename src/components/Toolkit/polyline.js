export default function polyline() {
  const polylineNode = document.querySelector(".polyline");

  function click() {
    alert("폴리라인");
  }

  function keydown(e) {
    if (e.keyCode === 76) {
      alert("폴리라인");
    }
  }

  window.addEventListener("keydown", keydown);
  polylineNode.addEventListener("click", click);
}
