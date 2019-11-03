import React from 'react';
import { Row } from 'reactstrap';
import Subject from 'components/Subject';
import Instrument from 'components/Instrument';

const Comparison = () => (
    <Row className="h100">
        <Subject />
        <Instrument />
    </Row>
);

export default Comparison;
