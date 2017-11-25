import { connect } from 'react-redux';

import PhotoItem from '../components/PhotoItem';

const mapStateToProps = ({ photos }, { id }) => {
    const { albumId, title, thumbnailUrl } = photos[id];
    return {
        albumId,
        id,
        title,
        thumbnailUrl
    };
};

const PhotoItemContainer = connect(
    mapStateToProps
)(PhotoItem);

export default PhotoItemContainer;
