// Nav Reducer
import { NavigationActions } from 'react-navigation'

import Routes from '../config/Routes'

const initialAction = { type: NavigationActions.Init }
const initialState = Routes.router.getStateForAction(initialAction)

const Nav = (state = initialState, action) => {
  const nextState = Routes.router.getStateForAction(action, state)

  return nextState || state
}

export default Nav

