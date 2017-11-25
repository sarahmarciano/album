import { connect } from 'react-redux';

import PhotosList from '../components/PhotosList';
import { getPhotosList } from '../actions';

const mapStateToProps = ({ ids }) => {
    return { ids };
};

const PhotosListContainer = connect(
    mapStateToProps, { getPhotosList }
)(PhotosList);

export default PhotosListContainer;
