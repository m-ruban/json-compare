import React from 'react';
import { Container } from 'reactstrap';
import 'HOC/withContainer/withContainer.less';

const withContainer = (WrappedComponent) => {
    const ComponentWithContainer = () => (
        <Container className="pt-4 pb-4 compare-tool" fluid>
            <WrappedComponent />
        </Container>
    );
    return ComponentWithContainer;
};

export default withContainer;
