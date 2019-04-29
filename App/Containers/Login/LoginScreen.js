import React from 'react'
import { Platform, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { Button, Container, Text } from 'native-base'
import { Images } from 'App/Theme'
import Style from './LoginScreenStyle'
import Header from 'App/Components/Header'
import Input from 'App/Components/Input'

// import { Header, Button, Input, ThemeProvider } from 'react-native-elements';

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

class LoginScreen extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <Image style={Style.logo} source={Images.loginHero} resizeMode={'contain'} />
          <Container style={Style.inputContainer}>
            <Input
              containerStyle={Style.inputContainerStyle}
              textContentType='username'
              autoCapitalize='none'
              text='Username'
            />
            <Input
              containerStyle={Style.inputContainerStyle}
              textContentType='password'
              autoCapitalize='none'
              secureTextEntry={true}
              text='Password'
            />
            <Container style={Style.buttonContainer}>
              <Button block primary style={Style.button}><Text>LOGIN</Text></Button>
              <Button bordered block primary style={Style.button}><Text>REGISTER</Text></Button>
            </Container>
          </Container>
        </ScrollView>
      </Container>
    )
  }
}

LoginScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
