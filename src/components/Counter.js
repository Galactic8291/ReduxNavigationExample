import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

// Action Creators
import { decrement, increment } from '../actions/ActionCreators'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center'
  }
})

const Counter = ({ count, decrement, increment }) => (
  <View style={ styles.container }>
    <Button
      onPress={ increment }
      title='+'
    />
    <Text style={ styles.text }>{ count }</Text>
    <Button
      onPress={ decrement }
      title='-'
    />
  </View>
)

const mapStateToProps = state => ({
  count: state.Counter
})

const mapDispatchToProps = {
  decrement,
  increment
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

