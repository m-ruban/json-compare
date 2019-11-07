import React from 'react';
import { Collapse, Nav, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import Examples from 'components/Header/Links/Examples';
import FAQ from 'components/Header/Links/FAQ';
import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';

import 'components/Header/Links/Links.less';

interface ILinksProps {
    feedback: string;
}

const Links = ({ feedback }: ILinksProps) => {
    const [isOpen, setOpen] = React.useState(false);
    const toggle = React.useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);

    return (
        <>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <Examples />
                    <NavItem>
                        <NavLink>
                            <FAQ />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="feedback" href={feedback} target="_blank">
                            {trl('Header.Links.feedback')}
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </>
    );
};

export default withConsumer(Links);
