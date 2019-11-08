import React from 'react';

import { Consumer } from 'store/Context';

const withConsumer = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const ComponentWithConsumer = (props) => (
        <Consumer>{(context) => <WrappedComponent {...props as P} {...context} />}</Consumer>
    );
    return ComponentWithConsumer;
};

export default withConsumer;
