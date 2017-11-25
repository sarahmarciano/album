import React, { Component } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import PhotoItem from '../containers/PhotoItemContainer';

class List extends Component {
    componentWillMount() {
        const { getPhotosList } = this.props;
        getPhotosList();
    }
    render() {
        const { ids, refreshing, refreshPhotoList, onItemPressed, error } = this.props;
        return ids.length > 0 && !error && (
            <FlatList
                data={ids}
                renderItem={({ item }) => <PhotoItem id={item} onItemPressed={() => onItemPressed(item)} />}
                keyExtractor={(item, index) => index}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={refreshPhotoList}
                        colors={['#3f0356', '#92c952', '#d32776']}
                    />
                }
            />
        );
    }
}

export default List;
