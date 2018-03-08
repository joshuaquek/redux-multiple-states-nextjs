// NextJs Stuff
import Link from 'next/link'

// Redux stuff required for later
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// Import in only one state tree this time
import { getHomepageState, bumpBuild } from '../states/treeOne'

// HTMl / JSX  code:
const Homepage = ({ build, bumpBuild }) => (
  <div>
    <h1>Homepage</h1>
    <h3>CURRENT build: {build}</h3>
    <p><button onClick={(e) => bumpBuild(1)}>Bump build!</button></p>
    <Link href='/about'><a>About Us</a></Link>
  </div>
)

// Mapping State Variables and Actions to Props:
function mapStateToProps (state) {
  return getHomepageState(state)
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ bumpBuild }, dispatch)
}

// Export Container to be used in Pages:
export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
