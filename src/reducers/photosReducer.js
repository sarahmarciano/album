import {
    FETCH_PHOTOS_FULFILLED,
    REFRESH_PHOTOS_FULFILLED
} from './types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    const { payload } = action;
    switch (action.type) {
        case REFRESH_PHOTOS_FULFILLED:
        case FETCH_PHOTOS_FULFILLED:
            const photos = {};
            payload.data.forEach(photo => photos[photo.id] = photo);
            return photos;
        default:
            return state;
    }
};
