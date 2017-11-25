import { combineReducers } from 'redux';

import photos from './photosReducer';
import ids from './idsReducer';

export default combineReducers({
    photos,
    ids
});
