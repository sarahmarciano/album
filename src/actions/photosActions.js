import axios from 'axios';

import {
    FETCH_PHOTOS_PENDING,
    FETCH_PHOTOS_FULFILLED,
    FETCH_PHOTOS_FAILED,
    REFRESH_PHOTOS_PENDING,
    REFRESH_PHOTOS_FULFILLED,
    REFRESH_PHOTOS_FAILED
} from '../reducers/types';

const fetchList = () => axios.get('https://jsonplaceholder.typicode.com/photos');

export const getPhotosList = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_PHOTOS_PENDING });
        fetchList()
            .then(data => {
                dispatch({ type: FETCH_PHOTOS_FULFILLED, payload: data });
            })
            .catch(() => {
                dispatch({ type: FETCH_PHOTOS_FAILED });
            });
    };
};

export const refreshPhotoList = () => {
    return (dispatch) => {
        dispatch({ type: REFRESH_PHOTOS_PENDING });
        fetchList()
            .then(data => {
                dispatch({ type: REFRESH_PHOTOS_FULFILLED, payload: data });
            })
            .catch(() => {
                dispatch({ type: REFRESH_PHOTOS_FAILED });
            });
    };
};
