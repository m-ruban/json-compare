import * as React from 'react';
import { Row, Container } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';
import Log from 'components/Footer/Log';
import 'components/Footer/Footer.less';

export interface FooterProps {
    author: string;
}

const Footer = ({ author }: FooterProps) => (
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
