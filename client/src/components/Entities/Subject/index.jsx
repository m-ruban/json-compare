import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import InputArea from 'components/Comparison/InputArea';
import ObjView from 'components/Comparison/ObjView';

const Subject = ({ toolStr, changeTool, toolObject, isCompare }) => (
    <Col xs={isCompare ? '6' : '12'}>
        <Row className="h100">
            <InputArea str={toolStr} change={changeTool} />
            <ObjView obj={toolObject} showRequired showAlerts />
        </Row>
    </Col>
);

Subject.propTypes = {
    toolStr: PropTypes.string,
    changeTool: PropTypes.func,
    toolObject: PropTypes.object,
    isCompare: PropTypes.bool,
};

export default withConsumer(Subject);
