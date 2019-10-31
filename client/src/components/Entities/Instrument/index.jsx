import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import ObjView from 'components/Comparison/ObjView';
import InputArea from 'components/Comparison/InputArea';

const Instrument = ({ isCompare, objStr, objObject, changeObj }) => {
    if (!isCompare) {
        return null;
    }
    return (
        <Col xs="6">
            <Row className="h100">
                <ObjView obj={objObject} showAlerts />
                <InputArea str={objStr} change={changeObj} showPanel />
            </Row>
        </Col>
    );
};

Instrument.propTypes = {
    isCompare: PropTypes.bool,
    objStr: PropTypes.string,
    objObject: PropTypes.object,
    changeObj: PropTypes.func,
};

export default withConsumer(Instrument);
