import React from 'react';
import {
    Button,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from 'reactstrap';

import 'components/Header/Links/FAQ/FAQ.less';
import Result from 'components/Header/Links/FAQ/Result';
import Types from 'components/Header/Links/FAQ/Types';
import trl from 'modules/translation';

const FAQ = () => {
    const [modal, setModal] = React.useState(false);
    const toggle = React.useCallback(() => {
        setModal(!modal);
    }, [modal]);

    return (
        <>
            <span className="faq-link" onClick={toggle}>
                {trl('Header.Links.FAQ.title')}
            </span>
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>FAQ</ModalHeader>
                <ModalBody>
                    <ListGroup>
                        <ListGroupItem>
                            <ListGroupItemHeading>{trl('FAQ.ForWhat.question')}</ListGroupItemHeading>
                            <div>{trl('FAQ.ForWhat.answer')}</div>
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
        </>
    );
};

export default FAQ;
