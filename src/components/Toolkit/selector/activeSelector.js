export default function selector() {
  const selectorEl = document.querySelector('.selector')

  function onClick() {
    alert('선택도구')
  }

  function keydown(e) {
    if (e.keyCode === 86) {
      alert('선택도구')
    }
  }

  window.addEventListener('keydown', keydown)
  selectorEl.addEventListener('click', onClick)
}
