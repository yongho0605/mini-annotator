export default function activeResize() {
  const resizeHandler = document.querySelector('.resizeHandler')
  const classSelector = document.querySelector('#classSelector')
  const annotatorEl = document.querySelector('.annotator')
  const mainEl = document.querySelector('main')

  resizeHandler.addEventListener('mousedown', onMouseDown)
  function onMouseDown(e) {
    if (e.button === 0) {
      mainEl.addEventListener('mousemove', onMouseMove)
      mainEl.addEventListener('mouseup', onMouseUp)

      function onMouseMove(e) {
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
          annotatorEl.style.width = `${Math.round(x)}px`
        }
      }

      function onMouseUp() {
        mainEl.removeEventListener('mousemove', onMouseMove)
      }
    }
  }
}
