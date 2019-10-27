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
    ListGroup,
} from 'reactstrap';

import trl from 'modules/translation';
import Types from 'components/Header/Links/FAQ/Types';
import Result from 'components/Header/Links/FAQ/Result';
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
                            <Types />
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>{trl('FAQ.ComparisonResult.question')}</ListGroupItemHeading>
                            <Result />
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
