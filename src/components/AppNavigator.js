import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import Routes from '../config/Routes'
import { AddListener } from '../config/ReduxNavConfig'

const AppNavigator = ({ dispatch, Nav }) => (
  <Routes
    navigation={ addNavigationHelpers({ dispatch, state: Nav, addListener: AddListener }) }
  />
)

const mapStateToProps = state => ({
  Nav: state.Nav
})

export default connect(mapStateToProps)(AppNavigator)

