import { connect } from 'react-redux';

import Error from '../components/Error';
import { getPhotosList } from '../actions';

const mapStateToProps = ({ meta }) => {
    const { error } = meta;
    return { error };
};

const ErrorContainer = connect(
    mapStateToProps, { onTryAgainPressed: getPhotosList }
)(Error);

export default ErrorContainer;
