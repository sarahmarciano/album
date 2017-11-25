import { combineReducers } from 'redux';

import photos from './photosReducer';
import ids from './idsReducer';
import meta from './metaReducer';

export default combineReducers({
    photos,
    ids,
    meta
});
