import React from 'react';

import Photo from '../containers/PhotoDetailsContainer';

const PhotoDetails = ({ navigation }) => {
    const { id } = navigation.state.params;
    return (
        <Photo id={id} />
    );
};

export default PhotoDetails;
