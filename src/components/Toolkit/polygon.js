export default function polygon() {
  const polygonNode = document.querySelector(".polygon");

  function onClick() {
    alert("폴리곤");
  }

  function keydownHandler(e) {
    if (e.keyCode === 80) {
      alert("폴리곤");
    }
  }

  polygonNode.addEventListener("click", onClick);
  window.addEventListener("keydown", keydownHandler);
}
