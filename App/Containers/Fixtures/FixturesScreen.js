import React from 'react'
import { View } from 'react-native'
import { PropTypes } from 'prop-types'
import { Button, Container, Content, Text } from 'native-base'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Style from './FixturesScreenStyle'
import Header from 'App/Components/Header'
import Input from 'App/Components/Input'

const GET_FIXTURES = gql`
  query  {
    FIXTURES {
      MATCH_ID
      HOME
      AWAY
      MATCH_DATETIME
      VENUE
      TOSS
      BAT
      WINNER
    }
  }
`;

class FixturesScreen extends React.Component {
  renderContent({ HOME, AWAY, VENUE, MATCH_DATETIME }, idx) {
    return (
      <Content key={idx}>
        <Text>{`${HOME} vs ${AWAY} at ${VENUE} on ${MATCH_DATETIME}`}</Text>
      </Content>
  )
  }
  render() {
    return (
      <Query query={GET_FIXTURES}>
      {({ data, loading, error }) => {
        if (loading) return <Text>LOADING...</Text>;
        if (error) return <Text>ERROR</Text>;

        return (
          <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {data.FIXTURES.map((fixture, idx) => this.renderContent(fixture, idx))}
          </Container>
        );
      }}
    </Query>
    )
  }
}

FixturesScreen.propTypes = {
  navigation: PropTypes.object,
}

export default FixturesScreen
