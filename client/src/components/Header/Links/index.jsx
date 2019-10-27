import React, { useCallback, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, Collapse, NavLink, NavbarToggler } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';
import Examples from 'components/Header/Links/Examples';
import FAQ from 'components/Header/Links/FAQ';

const Links = ({ feedback }) => {
    const [isOpen, setOpen] = useState(false);
    const toggle = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);

    return (
        <Fragment>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <Examples />
                    <NavItem>
                        <NavLink className="nav-link">
                            <FAQ />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" href={feedback} target="_blank">
                            {trl('Header.Links.feedback')}
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Fragment>
    );
};

Links.propTypes = {
    feedback: PropTypes.string,
};

export default withConsumer(Links);
