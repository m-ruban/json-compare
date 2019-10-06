import React from 'react';
import { Col, Row } from 'reactstrap';
import { AppConsumer } from '../../Contexts/Provider';
import Result from 'components/Compare/Cols/Result';
import Area from 'components/Compare/Cols/Area';

const Obj = () => (
    <AppConsumer>
        {({ isCompare, objStr, objObject, changeObj }) => {
            if (!isCompare) {
                return null;
            }
            return (
                <Col xs="6">
                    <Row className="h100">
                        <Result obj={objObject} showAlerts />
                        <Area str={objStr} change={changeObj} showPanel />
                    </Row>
                </Col>
            );
        }}
    </AppConsumer>
);

export default Obj;
