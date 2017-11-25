import React from 'react';
import { View } from 'react-native';

import List from '../containers/ListContainer';
import Loader from '../containers/LoaderContainer';
import Error from '../containers/ErrorContainer';

const PhotosList = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <List onItemPressed={(id) => navigation.navigate('PhotoDetails', { id })} />
            <Loader />
            <Error />
        </View>
    );
};

export default PhotosList;
