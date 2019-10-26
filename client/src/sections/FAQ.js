import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import withContainer from 'hocs/withContainer';

const Faq = () => (
    <Row>
        <Col xs={8}>
            <ListGroup>
                <ListGroupItem>
                    <ListGroupItemHeading>For what?</ListGroupItemHeading>
                    <ListGroupItemText>
                        This tool is being used for studying the <b>JSON</b> object hierarchy and comparing two{' '}
                        <b>JSON</b> objects.
                        <br />
                        Also, in the presence of the possibility of comparing two <b>JSON</b> objects.
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Comparison types</ListGroupItemHeading>
                    <ListGroupItemText>
                        The application has three types of comparison:
                        <br />
                        1) <b>==</b> - the application uses no strict equality (13 == &apos;13&apos;)
                        <br />
                        2) <b>===</b> - the application uses strict equality (13 !== &apos;13&apos;)
                        <br />
                        3) <b>Ignore</b> - the application ignore value of the key
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Comparison results</ListGroupItemHeading>
                    <ListGroupItemText>
                        <Badge color="req" pill>
                            !
                        </Badge>{' '}
                        - required key
                        <br />
                        <Badge color="diff" pill>
                            !
                        </Badge>{' '}
                        - the key exists, but it&apos;s value doesn&apos;t match the required one
                        <br />
                    </ListGroupItemText>
                </ListGroupItem>
            </ListGroup>
        </Col>
    </Row>
);

export default withContainer(Faq);
