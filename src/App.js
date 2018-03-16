import React from 'react'
import { Provider } from 'react-redux'

import Store from './config/Store'
import AppNavigator from './components/AppNavigator'

const App = () => (
  <Provider store={ Store }>
    <AppNavigator />
  </Provider>
)

export default App

