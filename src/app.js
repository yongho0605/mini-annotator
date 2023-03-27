import utils from '/src/assemble/utils/utils.js'
import canvas from '/src/assemble/canvas/canvas.js'
import toolkit from '/src/assemble/toolkit/toolkit.js'

export default function app() {
  toolkit()
  canvas()
  utils()
}
