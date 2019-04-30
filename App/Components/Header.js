import React, { Component } from 'react'
import { Header as NativeHeader, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { PropTypes } from 'prop-types'

class Header extends Component {
  render() {
    const { navigation, title } = this.props;
    return (
      <NativeHeader>
        <Left>
          <Button onPress={() => navigation.goBack()} transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          {/* <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button> */}
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </NativeHeader>
    )
  }
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default Header
