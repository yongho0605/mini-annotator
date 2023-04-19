import guideLine from '/src/components/toolkit/common/guideLine.js'
import Resize from '/src/components/toolkit/common/resize.js'
import Zoom from '/src/components/toolkit/common/zoom.js'
import Pan from '/src/components/toolkit/common/pan.js'
import mouseTracker from '/src/components/toolkit/mouseTracker.js'

export default function applyAssembledCommonTools(img) {
  guideLine.init()
  Resize.init(img)
  Zoom.init(img)
  Pan.init(img)
  mouseTracker(img)
  Resize.applyAnnotator(img)
}
