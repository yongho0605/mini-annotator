export default function keyPoint() {
  const keyPoint = document.querySelector(".keyPoint");
  function click() {
    alert("키포인트");
  }

  function keydown(e) {
    if (e.keyCode === 79) {
      alert("키포인트");
    }
  }

  keyPoint.addEventListener("click", click);
  window.addEventListener("keydown", keydown);
}
