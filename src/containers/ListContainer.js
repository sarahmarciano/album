import { connect } from 'react-redux';

import List from '../components/List';
import { getPhotosList, refreshPhotoList } from '../actions';

const mapStateToProps = ({ ids, meta }) => {
    const { refreshing, error } = meta;
    return {
        ids,
        refreshing,
        error
    };
};

const ListContainer = connect(
    mapStateToProps, { getPhotosList, refreshPhotoList }
)(List);

export default ListContainer;
