import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Error extends Component {
    render() {
        const { error, onTryAgainPressed } = this.props;
        const { viewStyle, errorTextStyle, buttonStyle, buttonTextStyle } = styles;
        return error && (
            <View style={viewStyle}>
                <Text style={errorTextStyle}>Oops... an error occurred, try again</Text>
                <TouchableOpacity style={buttonStyle} onPress={onTryAgainPressed}>
                    <Text style={buttonTextStyle}>Try Again</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorTextStyle: {
        fontSize: 18
    },
    buttonStyle: {
        padding: 10,
        backgroundColor: '#3f0356',
        marginTop: 10,
        borderRadius: 10
    },
    buttonTextStyle: {
        color: '#fff',
        fontSize: 17
    }
});

export default Error;
