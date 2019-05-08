import React from 'react'
import { View, Image } from 'react-native'
import { PropTypes } from 'prop-types'
import { Button, Container, Content, Text } from 'native-base'
import { Images } from 'App/Theme'
import Style from './LoginScreenStyle'
import Input from 'App/Components/Input'

// import { Header, Button, Input, ThemeProvider } from 'react-native-elements';

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'LOGIN',
  };

  render() {
    return (
      <Container>
        <Content>
          <Image style={Style.hero} source={Images.loginHero} resizeMode={'contain'} />
          <View style={Style.inputContainer}>
            <Input
              containerStyle={Style.inputContainerStyle}
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
            />
            <Input
              containerStyle={Style.inputContainerStyle}
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry={true}
              autoCorrect={false}
              placeholder="Password"
            />
            <View style={Style.buttonContainer}>
              <Button 
                onPress={() => this.props.navigation.replace('Tabs')} 
                block 
                primary 
                style={Style.button}
              >
                <Text>LOGIN</Text>
              </Button>
              <Button
                onPress={() => this.props.navigation.navigate('Register')}
                bordered
                block
                primary
                style={Style.button}
              >
                <Text>REGISTER</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object,
}

export default LoginScreen
