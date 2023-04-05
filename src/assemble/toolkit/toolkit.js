import ActiveBoundingBox from '/src/components/toolkit/boundingBox/activeBoundingBox.js'
import ActiveKeyPoint from '/src/components/toolkit/keyPoint/activeKeyPoint.js'
import ActiveOutPost from '/src/components/toolkit/activeOutPost.js'
import ActivePolygon from '/src/components/toolkit/polygon/activePolygon.js'
import ActivePolyline from '/src/components/toolkit/polyline/activePolyline.js'
import ActiveSelector from '/src/components/toolkit/selector/activeSelector.js'
import ActiveResize from '/src/components/toolkit/resize/activeResize.js'
import ChaseCoordinate from '/src/components/toolkit/chaseCoordinate.js'

export default function toolkit() {
  ActiveOutPost()
  ActiveSelector()
  ActiveBoundingBox()
  ActivePolygon()
  ActivePolyline()
  ActiveKeyPoint()
}
