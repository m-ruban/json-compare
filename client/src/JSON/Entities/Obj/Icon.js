import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

const Icon = ({ isOpen, toggle }) => (
  <Badge color="switch" onClick={toggle}>
    {isOpen ? '-' : '+'}
  </Badge>
);

Icon.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
};

export default Icon;
