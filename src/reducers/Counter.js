// Counter Reducer
// Action Types
import { INCREMENT, DECREMENT } from '../actions/ActionTypes'

const initialState = 0

const Couter = (state = initialState, action) => {
  switch(action.type) {
    case DECREMENT:
      return state - 1
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}

export default Couter

