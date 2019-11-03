import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import { OPEN_ICON, CLOSE_ICON } from 'constants/compare';

const Icon = ({ isOpen, toggle }) => (
    <Badge color="switch" onClick={toggle}>
        {isOpen ? OPEN_ICON : CLOSE_ICON}
    </Badge>
);

Icon.propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
};

export default Icon;
