import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, Collapse, NavLink, NavbarToggler } from 'reactstrap';
import Examples from 'components/Header/Links/Examples';
import FAQ from 'components/Header/Links/FAQ';

const Links = ({ feedback }) => {
    const [isOpen, setOpen] = useState(false);
    const toggle = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);
    return (
        <>
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
                            Feedback
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </>
    );
};

Links.propTypes = {
    feedback: PropTypes.string,
};

export default Links;
