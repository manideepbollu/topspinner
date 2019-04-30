import React, { Component } from 'react'
import { Item, Icon, Picker } from 'native-base'
import { PropTypes } from 'prop-types'
class InputPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: undefined,
    }
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    })
  }
  render() {
    const { containerStyle, placeholder } = this.props
    return (
      <Item style={containerStyle}>
        <Picker
          mode="dropdown"
          iosIcon={<Icon style={{marginLeft: '-7%'}} name="arrow-down" />}
          placeholder={placeholder}
          placeholderStyle={{ color: '#555' }}
          placeholderIconColor="#666"
          style={{ width: undefined, marginLeft: -10 }}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
        >
          <Picker.Item label="Wallet" value="key0" />
          <Picker.Item label="ATM Card" value="key1" />
          <Picker.Item label="Debit Card" value="key2" />
          <Picker.Item label="Credit Card" value="key3" />
          <Picker.Item label="Net Banking" value="key4" />
        </Picker>
      </Item>
    )
  }
}

InputPicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
}

export default InputPicker
