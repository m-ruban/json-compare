import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import { getType } from 'modules/compare';

const Type = ({ value }) => {
    const type = getType(value);
    return <Badge color={type}>{type}</Badge>;
};

Type.propTypes = {
    value: PropTypes.any,
};

export default Type;
