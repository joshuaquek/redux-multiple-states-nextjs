import {namespaceConfig} from 'fast-redux'

// Create State Tree
const DEFAULT_STATE = {build: 1, gender: 'male'}
const stateTreeConfig = namespaceConfig('homepage', DEFAULT_STATE)
const actionCreator = stateTreeConfig.actionCreator

// Export Entire State
export const getHomepageState = stateTreeConfig.getState

// Export State's Methods
export const bumpBuild = actionCreator(function (state, increment) {
  console.log(state);
  return {...state, build: state.build + increment}
})
