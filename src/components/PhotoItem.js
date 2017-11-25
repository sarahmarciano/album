import React from 'react';
import { Text } from 'react-native';

const PhotoItem = ({ albumId, id, title, url }) => {
    return (
        <Text>{title}</Text>
    );
};

export default PhotoItem;
