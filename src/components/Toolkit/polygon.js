export default function polygon() {
  const polygonNode = document.querySelector(".polygon");

  function click() {
    alert("폴리곤");
  }

  function keydown(e) {
    if (e.keyCode === 80) {
      alert("폴리곤");
    }
  }

  window.addEventListener("keydown", keydown);
  polygonNode.addEventListener("click", click);
}
