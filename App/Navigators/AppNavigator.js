import { createAppContainer, createStackNavigator } from 'react-navigation'
import TabNavigator from './TabNavigator'

import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import RegisterScreen from 'App/Containers/Register/RegisterScreen'

const Tabs = {
  screen: TabNavigator,
};

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Tabs: Tabs,
  },
  {
    headerMode: 'float',
    headerBackTitleVisible: false,
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

export default createAppContainer(StackNavigator)
