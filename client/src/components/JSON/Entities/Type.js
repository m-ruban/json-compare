import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

function getType(value) {
    let type = typeof value;

    if (type === 'object') {
        if (Array.isArray(value)) {
            type = 'array';
        }

        if (value === null) {
            type = 'null';
        }
    }

    return type;
}

const Type = ({ value }) => {
    const type = getType(value);
    return <Badge color={type}>{type}</Badge>;
};

Type.propTypes = {
    value: PropTypes.any,
};

export default Type;
