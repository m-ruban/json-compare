import React from 'react';
import { Row } from 'reactstrap';
import Tool from '../Compare/Tool';
import ObjectCompare from '../Compare/Obj';
import withContainer from '../HOC/withContainer';

const Compare = () => (
    <Row className="h100">
        <Tool />
        <ObjectCompare />
    </Row>
);

export default withContainer(Compare);
