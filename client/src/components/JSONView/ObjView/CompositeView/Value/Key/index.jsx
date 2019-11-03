import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Mark from 'components/Mark';

const Key = ({ value, isArray }) => {
    if (isArray) {
        return <Mark type="number" text={value} />;
    }

    return <Fragment>&quot;{value}&quot;</Fragment>;
};

Key.propTypes = {
    value: PropTypes.string,
    isArray: PropTypes.bool,
};

export default Key;
