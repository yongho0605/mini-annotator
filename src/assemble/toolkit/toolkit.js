import panning from '/src/components/toolkit/panning.js'
import boundingBox from '/src/components/toolkit/boundingbox/activeBoundingBox.js'
import keyPoint from '/src/components/toolkit/keyPoint/activeKeyPoint.js'
import outPost from '/src/components/toolkit/outPost.js'
import polygon from '/src/components/toolkit/polygon/activePolygon.js'
import polyline from '/src/components/toolkit/polyline/activePolyline.js'
import selector from '/src/components/toolkit/selector/activeSelector.js'

export default function toolkit() {
  outPost()
  selector()
  boundingBox()
  polygon()
  polyline()
  keyPoint()
  panning()
}
