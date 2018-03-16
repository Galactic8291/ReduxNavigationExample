// Redux Store
import { applyMiddleware, compose, createStore } from 'redux'

import RootReducer from '../reducers/Index'
import { NavMiddleware } from './ReduxNavConfig'

let enhancer

if(global.reduxNativeDevTools) {
  enhancer = compose(applyMiddleware(NavMiddleware), global.reduxNativeDevTools())
} else {
  enhancer = compose(applyMiddleware(NavMiddleware))
}

const Store = createStore(RootReducer, enhancer)

export default Store

