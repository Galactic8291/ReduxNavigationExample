// Routes Config
import { StackNavigator } from 'react-navigation'

// Components
import Main from '../components/Main'
import Counter from '../components/Counter'
import Auth from '../components/Auth'

const Routes = StackNavigator({
  MainScreen: { screen: Main },
  CounterScreen: { screen: Counter },
  AuthScreen: { screen: Auth }
}, { initialRouteName: 'MainScreen' })

export default Routes

