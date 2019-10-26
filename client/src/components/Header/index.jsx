import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

import { AppConsumer } from 'context';
import EqualityTypes from 'components/Header/EqualityTypes';
import Switch from 'components/Header/Switch';
import Links from 'components/Header/Links';
import Logo from 'components/Header/icon.png';

const Header = () => (
    <header>
        <AppConsumer>
            {({ isCompare, toggleCompare, feedback }) => (
                <Navbar color="light" expand="md" light>
                    <Link className="navbar-brand" to="/">
                        JS
                        <img src={Logo} alt="icon" />N
                    </Link>
                    <Switch isCompare={isCompare} toggleCompare={toggleCompare} />
                    {isCompare && <EqualityTypes />}
                    <Links feedback={feedback} />
                </Navbar>
            )}
        </AppConsumer>
    </header>
);

export default Header;
