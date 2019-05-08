import React from 'react'
import { View } from 'react-native'
import { PropTypes } from 'prop-types'
import { Button, Container, Content, Text } from 'native-base'
import Style from './HomeScreenStyle'

class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HOME</Text>
      </Container>
    )
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
}

export default HomeScreen
