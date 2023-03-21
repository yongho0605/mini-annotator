import { useToolsState } from "/src/store/useToolsState.js";

export default function polygon() {
  const polygonNode = document.querySelector(".polygon");

  function click() {
    useToolsState.polygon = true;
    if (useToolsState.polygon) {
      alert("폴리곤");
    }
  }

  function keydown(e) {
    if (e.keyCode === 80) {
      useToolsState.polygon = true;
      if (useToolsState.polygon) {
        alert("폴리곤");
      }
    }
  }

  window.addEventListener("keydown", keydown);
  polygonNode.addEventListener("click", click);
}
