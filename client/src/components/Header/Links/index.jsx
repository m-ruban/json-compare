import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Collapse, NavLink, NavbarToggler } from 'reactstrap';
import Examples from 'components/Header/Links/Examples';

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
                        <Link className="nav-link" to="/faq/">
                            FAQ
                        </Link>
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
