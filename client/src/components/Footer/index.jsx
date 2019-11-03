import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';
import Log from 'components/Footer/Log';
import 'components/Footer/Footer.less';

const Footer = ({ author }) => (
    <footer className="bg-light footer">
        <Container className="footer__container" fluid>
            <Row>
                <div className="footer__author text-muted py-3">
                    {trl('Footer.text')}
                    <a className="footer__link" target="_blank" href={author} rel="noopener noreferrer">
                        {trl('Footer.name')}
                    </a>
                </div>
                <Log />
            </Row>
        </Container>
    </footer>
);

Footer.propTypes = {
    author: PropTypes.string,
};

export default withConsumer(Footer);
