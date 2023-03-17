export default function selector() {
  const selectorNode = document.querySelector(".selector");

  function onClick() {
    alert("선택도구");
  }

  function keydownHandler(e) {
    if (e.keyCode === 86) {
      alert("선택도구");
    }
  }

  window.addEventListener("keydown", keydownHandler);
  selectorNode.addEventListener("click", onClick);
}
