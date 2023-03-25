import useToolsState from "/src/store/useToolsState.js";

export default function polyline() {
  const polylineNode = document.querySelector(".polyline");

  function click() {
    useToolsState.polyline = true;
    console.log("boundingbox", useToolsState.boundingbox);
    console.log("polygon", useToolsState.polygon);
    console.log("polyline", useToolsState.polyline);
    console.log("selector", useToolsState.selector);
    if (useToolsState.polyline) {
      alert("폴리라인");
    }
  }

  function keydown(e) {
    if (e.keyCode === 76) {
      useToolsState.polyline = true;
      if (useToolsState.polyline) {
        alert("폴리라인");
      }
    }
  }

  window.addEventListener("keydown", keydown);
  polylineNode.addEventListener("click", click);
}
