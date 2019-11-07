import React from 'react';
import { Col, Row } from 'reactstrap';

import Mark from 'components/Mark';
import { COMPARE_REQ } from 'constants/compare';
import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';

import 'components/InputWithPanel/AlertsPanel/AlertsPanel.less';

interface IAlert {
    res: string;
    scalar: boolean;
}

interface IAlertsPanelProps {
    alerts: Map<string, IAlert>;
}

const AlertsPanel = ({ alerts }: IAlertsPanelProps) => {
    const nodesAlerts = [];
    const nodesRequired = [];

    alerts.forEach((alert, path) => {
        if (!alert.scalar) {
            return;
        }
        if (alert.res === COMPARE_REQ) {
            nodesRequired.push(<div key={path}>{path}</div>);
        } else {
            nodesAlerts.push(<div key={path}>{path}</div>);
        }
    });

    return (
        <div className="pt-4 alerts">
            <div className="alerts__items bg-dark">
                <Row>
                    <Col xs="6">
                        <Mark type="diff" text="!" pill />
                        &nbsp;
                        <b>{trl('ResultPanel.alerts')}</b>
                        <br />
                        {nodesAlerts}
                    </Col>
                    <Col xs="6">
                        <Mark type="req" text="!" pill />
                        &nbsp;
                        <b>{trl('ResultPanel.required')}</b>
                        <br />
                        {nodesRequired}
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default withConsumer(AlertsPanel);
