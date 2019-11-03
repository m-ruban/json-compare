import React from 'react';
import { Row } from 'reactstrap';
import Subject from 'components/Subject';
import Instrument from 'components/Instrument';
import 'sections/Comparison/Comparison.less';

const Comparison = () => (
    <Row className="comparison">
        <Subject />
        <Instrument />
    </Row>
);

export default Comparison;
