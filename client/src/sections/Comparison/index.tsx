import React from 'react';
import { Row } from 'reactstrap';

import Instrument from 'components/Instrument';
import Subject from 'components/Subject';

import 'sections/Comparison/Comparison.less';

const Comparison = () => (
    <Row className="comparison">
        <Subject />
        <Instrument />
    </Row>
);

export default Comparison;
