import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';
import { COMPARE_REQ } from 'constants/compare';
import Mark from 'components/Mark';
import 'components/InputWithPanel/AlertsPanel/AlertsPanel.less';

const AlertsPanel = ({ alerts }) => {
    const nodesAlerts = [],
        nodesRequired = [];

    alerts.forEach((alert, path) => {
        if (!alert.scalar) return;
        if (alert.res === COMPARE_REQ) {
            nodesRequired.push(<div key={path}>{path}</div>);
        } else {
            nodesAlerts.push(<div key={path}>{path}</div>);
        }
    });

    return (
        <div className="pt-4 alerts">
            <div className="alerts__items">
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

AlertsPanel.propTypes = {
    alerts: PropTypes.object,
};

export default withConsumer(AlertsPanel);
