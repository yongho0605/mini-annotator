import applyBoundingBox from '/src/components/toolkit/core/boundingBox.js'
import applyKeyPoint from '/src/components/toolkit/core/keyPoint.js'
import applyOutPost from '/src/components/toolkit/core/outPost.js'
import applyPolygon from '/src/components/toolkit/core/polygon.js'
import applyPolyline from '/src/components/toolkit/core/polyline.js'
import applySelector from '/src/components/toolkit/core/selector.js'

export default function applyAssembledCoreTools() {
  applyOutPost()
  applySelector()
  applyBoundingBox()
  applyPolygon()
  applyPolyline()
  applyKeyPoint()
}
