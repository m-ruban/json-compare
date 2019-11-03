import React from 'react';
import PropTypes from 'prop-types';
import { getType } from 'modules/compare';
import Mark from 'components/Mark';

const Type = ({ value }) => {
    const type = getType(value);
    return <Mark type={type} text={type} />;
};

Type.propTypes = {
    value: PropTypes.any,
};

export default Type;
