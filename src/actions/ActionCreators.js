// Action Creators
import { 
  DECREMENT,
  INCREMENT,
  LOGIN,
  LOGOUT
} from './ActionTypes'

export const decrement = () => ({
  type: DECREMENT
})

export const increment = () => ({
  type: INCREMENT
})

export const login = () => ({
  type: LOGIN
})

export const logout = () => ({
  type: LOGOUT
})

