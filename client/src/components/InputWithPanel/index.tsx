import React from 'react';

import classNames from 'classnames';
import { Col, Input } from 'reactstrap';

import AlertsPanel from 'components/InputWithPanel/AlertsPanel';
import 'components/InputWithPanel/InputWithPanel.less';
import trl from 'modules/translation';

interface IInputWithPanelProps {
    str: string;
    change: (event: React.SyntheticEvent) => void;
    showPanel: boolean;
}

const InputWithPanel = ({ str, change, showPanel }: IInputWithPanelProps) => (
    <Col xs="5">
        <Input
            type="textarea"
            name="text"
            className={classNames(
                'json-input bg-dark',
                { 'json-input_with-panel': showPanel },
                { 'json-input_without-panel': !showPanel },
            )}
            placeholder={trl('Comparison.InputArea.placeholder')}
            value={str}
            onChange={change}
        />
        {showPanel && <AlertsPanel />}
    </Col>
);

InputWithPanel.defaultProps = {
    showPanel: false,
};

export default InputWithPanel;
