import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import { AppConsumer } from 'context';
import EqualityTypes from 'components/Header/EqualityTypes';
import Switch from 'components/Header/Switch';
import Links from 'components/Header/Links';
import Logo from 'components/Header/icon.png';
import 'components/Header/Header.less';

const Header = () => (
    <header className="compare-header">
        <AppConsumer>
            {({ isCompare, toggleCompare, feedback }) => (
                <Navbar color="light" expand="md" light>
                    <NavbarBrand>
                        JS
                        <img src={Logo} alt="icon" />N
                    </NavbarBrand>
                    <Switch isCompare={isCompare} toggleCompare={toggleCompare} />
                    {isCompare && <EqualityTypes />}
                    <Links feedback={feedback} />
                </Navbar>
            )}
        </AppConsumer>
    </header>
);

export default Header;
