import React from 'react';
import { Row } from 'reactstrap';
import Tool from 'components/Compare/Tool';
import ObjectCompare from 'components/Compare/Obj';

const Compare = () => (
    <Row className="h100">
        <Tool />
        <ObjectCompare />
    </Row>
);

export default Compare;
