import React, { useState, useCallback, Fragment } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Badge,
    ListGroup,
} from 'reactstrap';

import trl from 'modules/translation';
import { EQUALITY_TYPE_IGNORE, EQUALITY_TYPE_NOT_STRICT, EQUALITY_TYPE_STRICT } from 'constants/equality';
import 'components/Header/Links/FAQ/FAQ.less';

const FAQ = () => {
    const [modal, setModal] = useState(false);
    const toggle = useCallback(() => {
        setModal(!modal);
    }, [modal]);

    return (
        <Fragment>
            <span className="faq-link" onClick={toggle}>
                {trl('Header.Links.FAQ.title')}
            </span>
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>FAQ</ModalHeader>
                <ModalBody>
                    <ListGroup>
                        <ListGroupItem>
                            <ListGroupItemHeading>{trl('FAQ.ForWhat.question')}</ListGroupItemHeading>
                            <ListGroupItemText>{trl('FAQ.ForWhat.answer')}</ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>{trl('FAQ.ComparisonTypes.question')}</ListGroupItemHeading>
                            <div>
                                {trl('FAQ.ComparisonTypes.Answer.text')}
                                <ol>
                                    <li>
                                        {EQUALITY_TYPE_STRICT} - {trl('FAQ.ComparisonTypes.Answer.noStrict')}
                                    </li>
                                    <li>
                                        {EQUALITY_TYPE_NOT_STRICT} - {trl('FAQ.ComparisonTypes.Answer.strict')}
                                    </li>
                                    <li>
                                        {EQUALITY_TYPE_IGNORE} - {trl('FAQ.ComparisonTypes.Answer.ignore')}
                                    </li>
                                </ol>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>{trl('FAQ.ComparisonResult.question')}</ListGroupItemHeading>
                            <div>
                                <ol>
                                    <li>
                                        <Badge color="req" pill>
                                            !
                                        </Badge>
                                        {trl('FAQ.ComparisonResult.required')}
                                    </li>
                                    <li>
                                        <Badge color="diff" pill>
                                            !
                                        </Badge>
                                        {trl('FAQ.ComparisonResult.difference')}
                                    </li>
                                </ol>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        {trl('Header.Links.FAQ.button')}
                    </Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    );
};

export default FAQ;
