import React, { Component } from 'react';
import { Item, Input, Label } from 'native-base';
export default class FloatingLabelExample extends Component {
    render() {
        return (
            <Item style={this.props.containerStyle} floatingLabel>
                <Label>{this.props.text}</Label>
                <Input 
                    textContentType={this.props.textContentType}
                    autoCapitalize={this.props.autoCapitalize} 
                    secureTextEntry={this.props.secureTextEntry}
                />
            </Item>
        );
    }
}