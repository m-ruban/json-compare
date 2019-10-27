import React from 'react';
import PropTypes from 'prop-types';
import { AppConsumer } from 'context';

const withConsumer = (WrappedComponent) => {
    const ComponentWithConsumer = (props) => (
        <AppConsumer>{(context) => <WrappedComponent {...props} {...context} />}</AppConsumer>
    );

    ComponentWithConsumer.propTypes = {
        props: PropTypes.object,
    };

    return ComponentWithConsumer;
};

export default withConsumer;
