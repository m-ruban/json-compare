import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import trl from 'modules/translation';

const NotFound = () => (
    <Row>
        <Col xs={12}>
            <h4>{trl('NotFound.title')}</h4>
            <div>
                <Link to="/">{trl('NotFound.link')}</Link>
            </div>
        </Col>
    </Row>
);

export default NotFound;
