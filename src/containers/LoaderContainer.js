import { connect } from 'react-redux';

import Loader from '../components/Loader';

const mapStateToProps = ({ meta }) => {
    const { loading } = meta;
    return { loading };
};

const LoaderContainer = connect(
    mapStateToProps
)(Loader);

export default LoaderContainer;
