import {
    FETCH_PHOTOS_PENDING,
    FETCH_PHOTOS_FULFILLED,
    FETCH_PHOTOS_FAILED
} from './types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    const { payload } = action;
    switch (action.type) {
        case FETCH_PHOTOS_FULFILLED:
            return payload.data.map(({ id }) => id);
        default:
            return state;
    }
};