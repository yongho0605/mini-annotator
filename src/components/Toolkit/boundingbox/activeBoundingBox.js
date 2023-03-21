import { useToolsState } from "/src/store/useToolsState.js";
import drawBoundingBox from "./drawBoundingbox.js";

export default function activeBoundingbox() {
  const boundingboxNode = document.querySelector(".boundingBox");

  function click() {
    useToolsState.boundingbox = true;
    if (useToolsState.boundingbox) {
      lert("바운딩박스");
      drawBoundingBox();
    }
  }

  function keydown(e) {
    useToolsState.boundingbox = true;
    if (e.keyCode === 66) {
      if (useToolsState.boundingbox) {
        alert("바운딩박스");
        drawBoundingBox();
      }
    }
  }

  boundingboxNode.addEventListener("click", click);
  window.addEventListener("keydown", keydown);
}
