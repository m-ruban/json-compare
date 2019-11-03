import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import JSONView from 'components/JSONView';
import InputWithPanel from 'components/InputWithPanel';
import 'components/Instrument/Instrument.less';

const Instrument = ({ isCompare, objStr, objObject, changeObj }) => {
    if (!isCompare) {
        return null;
    }
    return (
        <Col xs="6">
            <Row className="instrument">
                <JSONView obj={objObject} showAlerts />
                <InputWithPanel str={objStr} change={changeObj} showPanel />
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
