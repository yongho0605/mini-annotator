let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
let SCROLL_SENSITIVITY = 0.0005

function draw() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
  ctx.translate(window.innerWidth / 2, window.innerHeight / 2)
  ctx.scale(cameraZoom, cameraZoom)
  ctx.translate(
    -window.innerWidth / 2 + cameraOffset.x,
    -window.innerHeight / 2 + cameraOffset.y
  )
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

  requestAnimationFrame(draw)
}

// Gets the relevant location from a mouse or single touch event
function getEventLocation(e) {
  return { x: e.clientX, y: e.clientY }
}

let isDragging = false
let dragStart = { x: 0, y: 0 }

function onPointerDown(e) {
  isDragging = true
  dragStart.x = getEventLocation(e).x / cameraZoom - cameraOffset.x
  dragStart.y = getEventLocation(e).y / cameraZoom - cameraOffset.y
}

function onPointerUp(e) {
  isDragging = false
  initialPinchDistance = null
  lastZoom = cameraZoom
}

function onPointerMove(e) {
  if (isDragging) {
    cameraOffset.x = getEventLocation(e).x / cameraZoom - dragStart.x
    cameraOffset.y = getEventLocation(e).y / cameraZoom - dragStart.y
  }
}

function handleTouch(e, singleTouchHandler) {
  if (e.touches.length == 1) {
    singleTouchHandler(e)
  } else if (e.type == 'touchmove' && e.touches.length == 2) {
    isDragging = false
    handlePinch(e)
  }
}

let initialPinchDistance = null

function handlePinch(e) {
  e.preventDefault()

  let touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  let touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY }

  // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
  let currentDistance = (touch1.x - touch2.x) ** 2 + (touch1.y - touch2.y) ** 2

  if (initialPinchDistance == null) {
    initialPinchDistance = currentDistance
  } else {
    adjustZoom(null, currentDistance / initialPinchDistance)
  }
}

canvas.addEventListener('mousedown', onPointerDown)
canvas.addEventListener('mouseup', onPointerUp)
canvas.addEventListener('mousemove', onPointerMove)

// Ready, set, go
draw()
