import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Main = ({ counter, auth }) => (
  <View style={ styles.container }>
    <Button
      onPress={ counter }
      title='Counter'
    />
    <Button
      onPress={ auth }
      title='Auth'
    />
  </View>
)

Main.navigationOptions = {
  title: 'Main Screen'
}

const mapDispatchToProps = dispatch => ({
  counter: () => dispatch(NavigationActions.navigate({ routeName: 'CounterScreen' })),
  auth: () => dispatch(NavigationActions.navigate({ routeName: 'AuthScreen' }))
})

export default connect(null, mapDispatchToProps)(Main)

