// NextJs Stuff
import Link from 'next/link'

// Redux stuff required for later
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// Import in your state(s)
import { getHomepageState, bumpBuild } from '../states/treeOne'
import { getAboutpageState, bumpVersion } from '../states/treeTwo'

// HTML / JSX Code:
const About = ({ version, gender, build, bumpVersion }) => (
  <div>
    <h1>About Us</h1>
    <h3>Current VERSION: {version}</h3>
    <h3>Current BUILD: {build}</h3>
    <h2>hello {gender}</h2>
    <p><button onClick={(e) => bumpVersion(1)}>Bump version only!</button></p>
    <Link href='/'><a>Homepage</a></Link>
  </div>
)

// Mapping State Variables and Actions to Props:
function mapStateToProps(state) {
  let stateOne = getHomepageState(state)
  let stateTwo= getAboutpageState(state, 'version', 'gender')
  let combinedState = { ...stateOne, ...stateTwo} // This is the part where we can merge the two states and use it as a combined state
  return combinedState
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ bumpVersion }, dispatch)
}

// Export Container to be used in Pages:
export default connect(mapStateToProps, mapDispatchToProps)(About)
