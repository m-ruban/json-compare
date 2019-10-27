import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';
import Logs from 'components/Footer/Logs';

const Footer = ({ author }) => (
    <footer className="bg-light">
        <Container fluid>
            <Row>
                <div className="body text-muted py-3">
                    {trl('Footer.text')}
                    <a target="_blank" href={author} rel="noopener noreferrer">
                        {trl('Footer.name')}
                    </a>
                </div>
                <Logs />
            </Row>
        </Container>
    </footer>
);

Footer.propTypes = {
    author: PropTypes.string,
};

export default withConsumer(Footer);
