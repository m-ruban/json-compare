import React from 'react';
import PropTypes from 'prop-types';
import { Col, Input } from 'reactstrap';
import Panel from '../Panel';

const Area = ({ str, change, showPanel }) => (
    <Col xs="5">
        <Input
            type="textarea"
            name="text"
            className={`json ${showPanel ? 'with-panel' : 'without-panel'}`}
            placeholder="Insert JSON string"
            value={str}
            onChange={change}
        />
        {showPanel && <Panel />}
    </Col>
);

Area.propTypes = {
    str: PropTypes.string,
    change: PropTypes.func,
    showPanel: PropTypes.bool,
};

Area.defaultProps = {
    showPanel: false,
};

export default Area;
