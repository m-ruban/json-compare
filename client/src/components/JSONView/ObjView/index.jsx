import React from 'react';
import PropTypes from 'prop-types';
import PrimitiveType from 'components/JSONView/ObjView/PrimitiveType';
import CompositeView from 'components/JSONView/ObjView/CompositeView';

const Property = ({ value, lvl, showAlerts, showRequired, path }) => {
    if (typeof value === 'object' && value) {
        return (
            <CompositeView obj={value} path={path} lvl={lvl + 1} showAlerts={showAlerts} showRequired={showRequired} />
        );
    }
    return <PrimitiveType path={path} value={value} showAlerts={showAlerts} showRequired={showRequired} />;
};

Property.propTypes = {
    value: PropTypes.any,
    lvl: PropTypes.number,
    path: PropTypes.array,
    showAlerts: PropTypes.bool,
    showRequired: PropTypes.bool,
};

Property.defaultProps = {
    lvl: 1,
    path: [],
};

export default Property;
