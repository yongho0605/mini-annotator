export default function selector() {
  const selectorNode = document.querySelector(".selector");

  function click() {
    alert("선택도구");
  }

  function keydown(e) {
    if (e.keyCode === 86) {
      alert("선택도구");
    }
  }

  window.addEventListener("keydown", keydown);
  selectorNode.addEventListener("click", click);
}
