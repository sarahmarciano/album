import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PhotoItem = ({ albumId, id, title, thumbnailUrl, onItemPressed }) => {
    const { viewStyle, leftSideStyle, imageStyle, titleViewStyle, titleStyle, albumIdStyle } = styles;
    return (
        <TouchableOpacity onPress={onItemPressed}>
            <View style={viewStyle}>
                <View style={leftSideStyle}>
                    <Image
                        style={imageStyle}
                        source={{ uri: thumbnailUrl }}
                    />
                    <View style={titleViewStyle}>
                        <Text numberOfLines={2} style={titleStyle}>{title}</Text>
                        <Text>{id}</Text>
                    </View>
                </View>
                <Text style={albumIdStyle}>{albumId}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        padding: 10,
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 0.5,
        height: 80
    },
    leftSideStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    imageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    titleViewStyle: {
        flexShrink: 1,
        marginHorizontal: 10
    },
    titleStyle: {
        fontSize: 17, flexWrap: 'wrap'
    },
    albumIdStyle: {
        color: '#3f0356',
        fontSize: 20,
        marginLeft: 10
    }
});

export default PhotoItem;
