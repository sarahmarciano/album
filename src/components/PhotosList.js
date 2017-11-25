import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';

import PhotoItem from '../containers/PhotoItemContainer';

class PhotosList extends Component {
    componentWillMount() {
        const { getPhotosList } = this.props;
        getPhotosList();
    }
    render() {
        const { ids } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={ids}
                    renderItem={({ item }) => <PhotoItem id={item} />}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }

};

export default PhotosList;
