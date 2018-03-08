import {namespaceConfig} from 'fast-redux'

// Create State Tree
const DEFAULT_STATE = {version: 1, gender: 'female'}
const stateTreeConfig = namespaceConfig('about', DEFAULT_STATE)
const actionCreator = stateTreeConfig.actionCreator

// Export State's Variables
export const getAboutpageState = stateTreeConfig.getState

// Export State's Methods
export const bumpVersion = actionCreator(function bumpVersion (state, increment) {
  console.log(state);
  return {...state, version: state.version + increment}
})
