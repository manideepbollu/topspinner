import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  inputContainer: {
    ...ApplicationStyles.screen.container,
    margin: 30,
    marginTop: -20,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
  inputContainerStyle: {
    marginTop: 10,
  },
  hero: {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: -20,
    height: 300,
  }
})
