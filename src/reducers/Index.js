// Root Reducer
import { combineReducers } from 'redux'

// Reducers
import Nav from './Nav'
import Counter from './Counter'
import Auth from './Auth'

export default combineReducers({
  Nav,
  Counter,
  Auth
})

