import { connect } from 'react-redux';

import PhotoItem from '../components/PhotoItem';

const mapStateToProps = ({ photos }, { id }) => {
    const { albumId, title, url } = photos[id];
    return {
        albumId,
        id,
        title,
        url
    };
};

const PhotoItemContainer = connect(
    mapStateToProps
)(PhotoItem);

export default PhotoItemContainer;
