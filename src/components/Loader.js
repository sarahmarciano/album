import React, { Component } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Loader extends Component {
    render() {
        const { loading } = this.props;
        const { viewStyle, textStyle } = styles;
        return loading && (
            <View style={viewStyle}>
                <ActivityIndicator color='#3f0356' />
                <Text style={textStyle}>Loading...</Text>
            </View>
        );
    }
}

Loader.propTypes = {
    loading: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        marginTop: 5
    }
});

export default Loader;
