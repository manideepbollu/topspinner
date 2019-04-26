import React, { Component } from 'react';
import { Item, Input, Label } from 'native-base';
export default class FloatingLabelExample extends Component {
    render() {
        return (
            <Item floatingLabel>
                <Label>{this.props.text}</Label>
                <Input textContentType={this.props.textContentType} />
            </Item>
        );
    }
}