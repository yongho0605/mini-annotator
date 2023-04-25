import { $ } from '/src/components/modules/elements.js'

export default function selector() {
  const selectorEl = $('.selector')

  function onClick() {
    alert('선택도구')
  }

  function keydown(e) {
    if (e.key === 'v' || e.key === 'ㅍ') {
      alert('선택도구')
    }
  }

  window.addEventListener('keydown', keydown)
  selectorEl.addEventListener('click', onClick)
}
