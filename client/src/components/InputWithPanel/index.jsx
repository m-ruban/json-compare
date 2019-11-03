import React from 'react';
import PropTypes from 'prop-types';
import { Col, Input } from 'reactstrap';
import classNames from 'classnames';

import trl from 'modules/translation';
import AlertsPanel from 'components/InputWithPanel/AlertsPanel';

const InputWithPanel = ({ str, change, showPanel }) => (
    <Col xs="5">
        <Input
            type="textarea"
            name="text"
            className={classNames('json', { 'with-panel': showPanel }, { 'without-panel': !showPanel })}
            placeholder={trl('Comparison.InputArea.placeholder')}
            value={str}
            onChange={change}
        />
        {showPanel && <AlertsPanel />}
    </Col>
);

InputWithPanel.propTypes = {
    str: PropTypes.string,
    change: PropTypes.func,
    showPanel: PropTypes.bool,
};

InputWithPanel.defaultProps = {
    showPanel: false,
};

export default InputWithPanel;
