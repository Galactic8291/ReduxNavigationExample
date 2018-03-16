import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

// Action Creators
import { login, logout } from '../actions/ActionCreators'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center'
  }
})

const Auth = ({ loginStatus, login, logout }) => (
  <View style={ styles.container }>
    <Button
      onPress={login}
      title='Login'
    />
    <Text style={ styles.text }>{ loginStatus }</Text>
    <Button
      onPress={logout}
      title='Logout'
    />
  </View>
)

Auth.navigationOptions = {
  title: 'Auth'
}

const mapStateToProps = state => ({
  loginStatus: String(state.Auth.isLoggedIn)
})

const mapDispatchToProps = {
  login,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

