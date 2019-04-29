import React, { Component } from 'react';
import { Container, Header as NativeHeader, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class Header extends Component {
  render() {
    return (
      <NativeHeader>
        <Left>
          <Button onPress={() => this.props.navigation.goBack()} transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>LOGIN</Title>
        </Body>
        <Right>
          {/* <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button> */}
          <Button transparent>
            <Icon name='more' />
          </Button>
        </Right>
      </NativeHeader>
    );
  }
}
