import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import InputWithPanel from 'components/InputWithPanel';
import JSONView from 'components/JSONView';
import 'components/Subject/Subject.less';

const Subject = ({ toolStr, changeTool, toolObject, isCompare }) => (
    <Col xs={isCompare ? '6' : '12'}>
        <Row className="subject">
            <InputWithPanel str={toolStr} change={changeTool} />
            <JSONView obj={toolObject} showRequired showAlerts />
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
