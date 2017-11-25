import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const PhotoDetails = ({ albumId, id, title, url }) => {
    const { imageStyle, textStyle, labelStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Image
                style={imageStyle}
                source={{ uri: url }}
            />
            <Text style={textStyle}><Text style={labelStyle}>Title:</Text> {title}</Text>
            <Text style={textStyle}><Text style={labelStyle}>Id:</Text> {id}</Text>
            <Text style={textStyle}><Text style={labelStyle}>Album Id:</Text> {albumId}</Text>
        </View>
    );
};

PhotoDetails.propTypes = {
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        padding: 20
    },
    imageStyle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 10
    },
    textStyle: {
        fontSize: 17,
        marginBottom: 5
    },
    labelStyle: {
        fontWeight: 'bold'
    }
});

export default PhotoDetails;
