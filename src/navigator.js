import { StackNavigator } from 'react-navigation';

import PhotosList from './screens/PhotosList';
import PhotoDetails from './screens/PhotoDetails';

export default StackNavigator({
    PhotosList: {
        screen: PhotosList,
        navigationOptions: {
            title: 'PhotosList'
        }
    },
    PhotoDetails: {
        screen: PhotoDetails,
        navigationOptions: {
            title: 'PhotoDetails'
        }
    }
});
