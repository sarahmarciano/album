import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './navigator';
import configureStore from './configureStore';

const App = () => {
    return (
        <Provider store={configureStore()}>
            <Navigator />
        </Provider>
    );
};

export default App;
