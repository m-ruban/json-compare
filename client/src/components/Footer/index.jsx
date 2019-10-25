import React from 'react';
import { AppConsumer } from 'context';
import { Row, Container } from 'reactstrap';
import Logs from 'components/Footer/Logs';

const Footer = () => (
    <footer className="bg-light">
        <Container fluid>
            <Row>
                <AppConsumer>
                    {({ author }) => (
                        <div className="body text-muted py-3">
                            Author -{' '}
                            <a target="_blank" href={author} rel="noopener noreferrer">
                                DD
                            </a>
                        </div>
                    )}
                </AppConsumer>
                <Logs />
            </Row>
        </Container>
    </footer>
);

export default Footer;
