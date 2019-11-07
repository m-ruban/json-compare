import React from 'react';
import { Container, Row } from 'reactstrap';

import Log from 'components/Footer/Log';
import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';

import 'components/Footer/Footer.less';

interface IFooterProps {
    author: string;
}

const Footer = ({ author }: IFooterProps) => (
    <footer className="footer">
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

export default withConsumer(Footer);
