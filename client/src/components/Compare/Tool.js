import React from 'react';
import { Col, Row } from 'reactstrap';
import { AppConsumer } from 'context';
import Result from 'components/Compare/Cols/Result';
import Area from 'components/Compare/Cols/Area';

const ToolCompare = () => (
    <AppConsumer>
        {({ toolStr, changeTool, toolObject, isCompare }) => (
            <Col xs={isCompare ? '6' : '12'}>
                <Row className="h100">
                    <Area str={toolStr} change={changeTool} />
                    <Result obj={toolObject} showRequired showAlerts />
                </Row>
            </Col>
        )}
    </AppConsumer>
);

export default ToolCompare;
