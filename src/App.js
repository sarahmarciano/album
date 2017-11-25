import React from 'react';
import { Provider } from 'react-redux';

import PhotosList from './containers/PhotosListContainer';
import configureStore from './configureStore';

const App = () => {
    return (
        <Provider store={configureStore()}>
            <PhotosList />
        </Provider>
    );
};

export default App;
