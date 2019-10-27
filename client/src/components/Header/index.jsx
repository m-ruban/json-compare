import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import PropTypes from 'prop-types';

import withConsumer from 'hoc/withConsumer';
import EqualityTypes from 'components/Header/EqualityTypes';
import Switch from 'components/Header/Switch';
import Links from 'components/Header/Links';
import Logo from 'components/Header/Icon.png';
import 'components/Header/Header.less';

const Header = ({ isCompare }) => (
    <header className="compare-header">
        <Navbar color="light" expand="md" light>
            <NavbarBrand>
                JS
                <img src={Logo} alt="icon" />N
            </NavbarBrand>
            <Switch />
            {isCompare && <EqualityTypes />}
            <Links />
        </Navbar>
    </header>
);

Header.propTypes = {
    isCompare: PropTypes.bool,
};

export default withConsumer(Header);
