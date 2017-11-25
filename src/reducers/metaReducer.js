import {
    FETCH_PHOTOS_PENDING,
    FETCH_PHOTOS_FULFILLED,
    FETCH_PHOTOS_FAILED,
    REFRESH_PHOTOS_PENDING,
    REFRESH_PHOTOS_FULFILLED,
    REFRESH_PHOTOS_FAILED
} from './types';

const INITIAL_STATE = {
    loading: false,
    refreshing: false,
    error: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PHOTOS_PENDING:
            return { ...state, loading: true, error: false };
        case FETCH_PHOTOS_FULFILLED:
            return { ...state, loading: false };
        case FETCH_PHOTOS_FAILED:
            return { ...state, loading: false, error: true };
        case REFRESH_PHOTOS_PENDING:
            return { ...state, refreshing: true, error: false };
        case REFRESH_PHOTOS_FULFILLED:
            return { ...state, refreshing: false };
        case REFRESH_PHOTOS_FAILED:
            return { ...state, refreshing: false, error: true };
        default:
            return state;
    }
};
