// Auth Reducer
// Action Types
import { LOGIN, LOGOUT } from '../actions/ActionTypes'

const initialState = { isLoggedIn: false }

const Auth = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true }
    case LOGOUT: 
      return { ...state, isLoggedIn: false }
    default:
      return state
  }
}

export default Auth

