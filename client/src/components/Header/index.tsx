import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import EqualityTypes from 'components/Header/EqualityTypes';
import 'components/Header/Header.less';
import Logo from 'components/Header/Icon.png';
import Links from 'components/Header/Links';
import Switch from 'components/Header/Switch';
import withConsumer from 'hoc/withConsumer';

interface IHeaderProps {
    isCompare: string;
}

const Header = ({ isCompare }: IHeaderProps) => (
    <header className="header">
        <Navbar className="header__nav-bar" expand="md" light>
            <NavbarBrand>
                JS
                <img className="header__logo" src={Logo} alt="icon" />N
            </NavbarBrand>
            <Switch />
            {isCompare && <EqualityTypes />}
            <Links />
        </Navbar>
    </header>
);

export default withConsumer(Header);
