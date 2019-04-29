import React, { Component } from 'react';
import { Item, Input as NativeInput, Label } from 'native-base';
export default class Input extends Component {
    render() {
        return (
            <Item style={this.props.containerStyle}>
                <NativeInput 
                    placeholder={this.props.text}
                    textContentType={this.props.textContentType}
                    autoCapitalize={this.props.autoCapitalize} 
                    secureTextEntry={this.props.secureTextEntry}
                />
            </Item>
        );
    }
}