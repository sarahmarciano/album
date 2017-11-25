import {
    FETCH_PHOTOS_PENDING,
    FETCH_PHOTOS_FULFILLED,
    FETCH_PHOTOS_FAILED
} from './types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    const { payload } = action;
    switch (action.type) {
        case FETCH_PHOTOS_FULFILLED:
            const photos = {};
            payload.data.forEach(photo => photos[photo.id] = photo);
            return { ...state, ...photos };
        default:
            return state;
    }
};