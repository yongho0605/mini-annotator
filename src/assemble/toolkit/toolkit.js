import boundingBox from '/src/components/toolkit/boundingbox/activeBoundingBox.js'
import keyPoint from '/src/components/toolkit/keyPoint/activeKeyPoint.js'
import activeOutPost from '/src/components/toolkit/activeOutPost.js'
import polygon from '/src/components/toolkit/polygon/activePolygon.js'
import polyline from '/src/components/toolkit/polyline/activePolyline.js'
import selector from '/src/components/toolkit/selector/activeSelector.js'
import activeResize from '/src/components/toolkit/resize/activeResize.js'

export default function toolkit() {
  activeOutPost()
  selector()
  boundingBox()
  polygon()
  polyline()
  keyPoint()
  activeResize()
}
