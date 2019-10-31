import React from 'react';
import PropTypes from 'prop-types';
import { Col, Input } from 'reactstrap';
import ResultPanel from 'components/Comparison/ResultPanel';

const InputArea = ({ str, change, showPanel }) => (
    <Col xs="5">
        <Input
            type="textarea"
            name="text"
            className={`json ${showPanel ? 'with-panel' : 'without-panel'}`}
            placeholder="Insert JSON string"
            value={str}
            onChange={change}
        />
        {showPanel && <ResultPanel />}
    </Col>
);

InputArea.propTypes = {
    str: PropTypes.string,
    change: PropTypes.func,
    showPanel: PropTypes.bool,
};

InputArea.defaultProps = {
    showPanel: false,
};

export default InputArea;
