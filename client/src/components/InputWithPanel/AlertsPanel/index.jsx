import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Badge } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';
import { COMPARE_REQ } from 'constants/compare';

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
        <div className="pt-4 panel">
            <div className="body">
                <Row>
                    <Col xs="6">
                        <Badge color="diff" pill>
                            !
                        </Badge>
                        &nbsp;
                        <b>{trl('ResultPanel.alerts')}</b>
                        <br />
                        {nodesAlerts}
                    </Col>
                    <Col xs="6">
                        <Badge color="req" pill>
                            !
                        </Badge>
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
