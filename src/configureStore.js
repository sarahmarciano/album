import { createStore, applyMiddleware } from 'redux';
import ReduxThnk from 'redux-thunk';

import reducers from './reducers';

const configureStore = () => {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThnk));
    return store;
};

export default configureStore;
