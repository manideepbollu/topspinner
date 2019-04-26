import React from 'react'
import { Platform, View, Input, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { Button, Container, Content, Form, Text } from 'native-base'
import { Images } from 'App/Theme'
import Style from './LoginScreenStyle'
import Header from 'App/Components/Header'
import FloatingInput from 'App/Components/FloatingInput'

// import { Header, Button, Input, ThemeProvider } from 'react-native-elements';

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class LoginScreen extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        {/* <Container style={Style.logoContainer}>
          <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
        </Container> */}
        <Container style={Style.container}>
          <FloatingInput textContentType='emailAddress' text='Username' />
          <FloatingInput textContentType='password' text='Password' />
          <Button block primary style={Style.button}><Text> LOGIN </Text></Button>
        </Container>
        {/* <Button
          title="LOGIN"
        /> */}
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
