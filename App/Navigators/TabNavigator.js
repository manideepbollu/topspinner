import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Container, Icon, Text } from 'native-base'

import HomeScreen from 'App/Containers/Home/HomeScreen'
import FixturesScreen from 'App/Containers/Fixtures/FixturesScreen'
import LeaderboardScreen from 'App/Containers/Leaderboard/LeaderboardScreen'

class SettingsScreen extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </Container>
    )
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    HOME: HomeScreen,
    FIXTURES: FixturesScreen,
    QUICKPICK: SettingsScreen,
    LEADERBOARD: LeaderboardScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'HOME') {
          iconName = `star-half`
        } else if (routeName === 'FIXTURES') {
          iconName = `camera`
        } else if (routeName === 'LEADERBOARD') {
          iconName = `star-half`
        } else if (routeName === 'QUICKPICK') {
          iconName = `person`
        }

        // You can return any component that you like here!
        return <Icon active={focused} name={iconName} style={{ color: tintColor }} />
      },
    }),
    navigationOptions: ({ navigation }) => ({
      title: 'TABS',
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
  }
)

export default TabNavigator
