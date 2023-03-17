export default function keyPoint() {
  const keyPoint = document.querySelector(".keyPoint");
  function onClick() {
    alert("키포인트");
  }

  function keydownHandler(e) {
    if (e.keyCode === 79) {
      alert("키포인트");
    }
  }

  keyPoint.addEventListener("click", onClick);
  window.addEventListener("keydown", keydownHandler);
}
