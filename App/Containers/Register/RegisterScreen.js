import React from 'react'
import { View, Image } from 'react-native'
import { PropTypes } from 'prop-types'
import { Container, Content, Button, Text } from 'native-base'
import { Images } from 'App/Theme'
import Style from './RegisterScreenStyle'
import Input from 'App/Components/Input'
import InputPicker from 'App/Components/InputPicker'

class RegisterScreen extends React.Component {

  static navigationOptions = {
    title: 'REGISTER',
  };

  render() {
    return (
      <Container>
        <Content>
          <Image style={Style.hero} source={Images.registerHero} resizeMode={'contain'} />
          <View style={Style.inputContainer}>
            <Input
              containerStyle={Style.inputContainerStyle}
              textContentType="emailAddress"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Email"
            />
            <Input
              containerStyle={Style.inputContainerStyle}
              textContentType="newPassword"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              placeholder="Password"
            />
            <Input
              containerStyle={Style.inputContainerStyle}
              textContentType="newPassword"
              autoCorrect={false}
              secureTextEntry={true}
              placeholder="Confirm Password"
            />
            <Input
              containerStyle={Style.inputContainerStyle}
              textContentType="givenName"
              autoCorrect={false}
              placeholder="Firstname"
            />
            <Input
              containerStyle={Style.inputContainerStyle}
              textContentType="familyName"
              autoCorrect={false}
              placeholder="Lastname"
            />
            <InputPicker containerStyle={Style.inputContainerStyle} placeholder="Question 1" />
            <Input
              containerStyle={Style.inputContainerStyle}
              autoCorrect={false}
              placeholder="Answer"
            />
            <InputPicker containerStyle={Style.inputContainerStyle} placeholder="Question 2" />
            <Input
              containerStyle={Style.inputContainerStyle}
              autoCorrect={false}
              placeholder="Answer"
            />
            <Content style={Style.buttonContainer}>
              <Button 
                onPress={() => this.props.navigation.replace('Tabs')} 
                block 
                primary 
                style={Style.button}
              >
                <Text>REGISTER</Text>
              </Button>
              <Button
                onPress={() => this.props.navigation.navigate('Login')}
                bordered
                block
                primary
                style={Style.button}
              >
                <Text>LOGIN</Text>
              </Button>
            </Content>
          </View>
        </Content>
      </Container>
    )
  }
}

RegisterScreen.propTypes = {
  navigation: PropTypes.object,
}

export default RegisterScreen
