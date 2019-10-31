import React from 'react';
import { Row } from 'reactstrap';
import Subject from 'components/Entities/Subject';
import Instrument from 'components/Entities/Instrument';

const Comparison = () => (
    <Row className="h100">
        <Subject />
        <Instrument />
    </Row>
);

export default Comparison;
