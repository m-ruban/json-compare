import React from 'react';
import { Col, Row, Badge } from 'reactstrap';
import { COMPARE_REQ } from 'constants/compare';
import { AppConsumer } from 'context';

const Panel = () => (
    <AppConsumer>
        {({ alerts }) => {
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
                                </Badge>{' '}
                                <b>Alerts</b>
                                <br />
                                {nodesAlerts}
                            </Col>
                            <Col xs="6">
                                <Badge color="req" pill>
                                    !
                                </Badge>{' '}
                                <b>Required</b>
                                <br />
                                {nodesRequired}
                            </Col>
                        </Row>
                    </div>
                </div>
            );
        }}
    </AppConsumer>
);

export default Panel;