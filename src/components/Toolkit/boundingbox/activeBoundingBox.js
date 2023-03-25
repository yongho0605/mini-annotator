import useToolsState from "/src/store/useToolsState.js";

export default function activeBoundingbox() {
  const boundingboxNode = document.querySelector(".boundingBox");

  function click() {
    useToolsState.boundingbox = true;
  }

  function keydown(e) {
    if (e.keyCode === 66) {
      useToolsState.boundingbox = true;
    }
  }

  boundingboxNode.addEventListener("click", click);
  window.addEventListener("keydown", keydown);
}
