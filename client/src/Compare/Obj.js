import React from 'react';
import { AppConsumer } from '../Contexts/Provider';
import { Col, Row } from 'reactstrap';
import Result from './Cols/Result';
import Area from './Cols/Area';

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
