import React from 'react'
import { View } from 'react-native'
import { PropTypes } from 'prop-types'
import { Button, Container, Content, Text } from 'native-base'
import Style from './LeaderboardScreenStyle'
import Header from 'App/Components/Header'
import Input from 'App/Components/Input'

class LeaderboardScreen extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>LEADERBOARD</Text>
      </Container>
    )
  }
}

LeaderboardScreen.propTypes = {
  navigation: PropTypes.object,
}

export default LeaderboardScreen
