import useToolsState from "/src/store/useToolsState.js";

export default function keyPoint() {
  const keyPoint = document.querySelector(".keyPoint");
  function click() {
    useToolsState.keypoint = true;
    if (useToolsState.keypoint) {
      alert("키포인트");
    }
  }

  function keydown(e) {
    if (e.keyCode === 79) {
      useToolsState.keypoint = true;
      if (useToolsState.keypoint) {
        alert("키포인트");
      }
    }
  }

  keyPoint.addEventListener("click", click);
  window.addEventListener("keydown", keydown);
}
