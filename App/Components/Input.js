import React, { Component } from 'react'
import { Item, Input as NativeInput } from 'native-base'
import { PropTypes } from 'prop-types'

class Input extends Component {
  render() {
    const {
      containerStyle,
      placeholder,
      textContentType,
      autoCorrect,
      autoCapitalize,
      secureTextEntry,
    } = this.props
    return (
      <Item style={containerStyle}>
        <NativeInput
          placeholder={placeholder}
          textContentType={textContentType}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
        />
      </Item>
    )
  }
}

Input.propTypes = {
  containerStyle: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  textContentType: PropTypes.string,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool
}

export default Input
