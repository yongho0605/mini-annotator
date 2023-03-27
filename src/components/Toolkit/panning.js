export default function panning() {
  let spaceBarPressed = false
  let leftMousePressed = false

  function pressedHandler() {
    console.log('패닝')
  }

  function checkPressed() {
    if (spaceBarPressed && leftMousePressed) {
      pressedHandler()
      spaceBarPressed = false
      leftMousePressed = false
    }
  }

  function keypress(e) {
    if (e.keyCode === 32) {
      spaceBarPressed = true
      checkPressed()
    }
  }

  function keyup(e) {
    if (e.keyCode === 32) {
      spaceBarPressed = false
    }
  }

  function mousedown(e) {
    if (e.button === 0) {
      leftMousePressed = true
      checkPressed()
    }
  }

  function mouseup(e) {
    if (e.button === 0) {
      leftMousePressed = false
    }
  }

  window.addEventListener('keypress', keypress)
  window.addEventListener('keyup', keyup)
  window.addEventListener('mousedown', mousedown)
  window.addEventListener('mouseup', mouseup)
}
