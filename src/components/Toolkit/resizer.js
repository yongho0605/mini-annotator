export default function resize() {
  const resizer = document.querySelector('.resizer')
  const classSelector = document.getElementById('classSelector')
  const mainElem = document.querySelector('main')
  const annotator = document.querySelector('.annotator')

  resizer.addEventListener('mousedown', mousedown)
  function mousedown(e) {
    if (e.button === 0) {
      mainElem.addEventListener('mousemove', mousemove)
      mainElem.addEventListener('mouseup', remove)

      function mousemove(e) {
        let x = e.clientX
        const minSize = 250
        const maxSize = 8000

        if (x < minSize) {
          x = minSize
          return
        } else if (x > maxSize) {
          x = maxSize
          return
        } else {
          classSelector.style.width = `${Math.round(x)}px`
          annotator.style.width = `${Math.round(x)}px`
        }
      }

      function remove() {
        mainElem.removeEventListener('mousemove', mousemove)
      }
    }
  }
}
