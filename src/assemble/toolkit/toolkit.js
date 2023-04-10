import applyBoundingBox from '/src/components/toolkit/boundingBox/boundingBox.js'
import applyKeyPoint from '/src/components/toolkit/keyPoint/keyPoint.js'
import applyOutPost from '/src/components/toolkit/outPost.js'
import applyPolygon from '/src/components/toolkit/polygon/polygon.js'
import applyPolyline from '/src/components/toolkit/polyline/polyline.js'
import applySelector from '/src/components/toolkit/selector/selector.js'

export default function toolkit() {
  applyOutPost()
  applySelector()
  applyBoundingBox()
  applyPolygon()
  applyPolyline()
  applyKeyPoint()
}
