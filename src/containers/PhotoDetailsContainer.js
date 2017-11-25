import { connect } from 'react-redux';

import PhotoDetails from '../components/PhotoDetails';

const mapStateToProps = ({ photos }, { id }) => {
    const { albumId, title, url } = photos[id];
    return {
        albumId,
        id,
        title,
        url
    };
};

const PhotoDetailsContainer = connect(
    mapStateToProps
)(PhotoDetails);

export default PhotoDetailsContainer;
