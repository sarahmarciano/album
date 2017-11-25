import axios from 'axios';

import {
    FETCH_PHOTOS_PENDING,
    FETCH_PHOTOS_FULFILLED,
    FETCH_PHOTOS_FAILED
} from '../reducers/types';

export const getPhotosList = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_PHOTOS_PENDING });
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(data => {
                dispatch({ type: FETCH_PHOTOS_FULFILLED, payload: data });
            })
            .catch(error => {
                dispatch({ type: FETCH_PHOTOS_FAILED });
            })
    };
};
