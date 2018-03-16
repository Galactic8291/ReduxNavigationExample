// Redux Nav Config
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers'

const NavMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.Nav
)

const AddListener = createReduxBoundAddListener("root")

export {
  NavMiddleware,
  AddListener
}

