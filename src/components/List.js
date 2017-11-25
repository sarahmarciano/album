import React, { Component } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

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

List.propTypes = {
    ids: PropTypes.array.isRequired,
    refreshing: PropTypes.bool.isRequired,
    refreshPhotoList: PropTypes.func.isRequired,
    onItemPressed: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired
};

export default List;
