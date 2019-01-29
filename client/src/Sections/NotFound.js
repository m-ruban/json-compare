import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import withContainer from '../HOC/withContainer';

const NotFound = () => (
  <Row>
    <Col xs={12}>
      <h4>Not found</h4>
      <div>
        <Link to="/">Return to Home Page</Link>
      </div>
    </Col>
  </Row>
);

const NotFoundWithContainer = withContainer(NotFound);

export default NotFoundWithContainer;
