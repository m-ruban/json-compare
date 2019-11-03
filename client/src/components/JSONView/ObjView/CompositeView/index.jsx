import React, { Fragment, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { BRACKET_ARRAY_CLOSE, BRACKET_ARRAY_OPEN, BRACKET_OBJECT_CLOSE, BRACKET_OBJECT_OPEN } from 'constants/compare';
import Icon from 'components/JSONView/ObjView/CompositeView/Icon';
import Value from 'components/JSONView/ObjView/CompositeView/Value';

const ObjView = ({ obj, lvl, path, showAlerts, showRequired }) => {
    const isArray = Array.isArray(obj);
    const [isOpen, setOpen] = useState(true);
    const toggle = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);

    return (
        <Fragment>
            <Icon isOpen={isOpen} toggle={toggle} />
            {isArray ? BRACKET_ARRAY_OPEN : BRACKET_OBJECT_OPEN}
            {isOpen ? (
                <Value
                    isArray={isArray}
                    obj={obj}
                    path={path}
                    lvl={lvl}
                    showAlerts={showAlerts}
                    showRequired={showRequired}
                />
            ) : null}
            {isArray ? BRACKET_ARRAY_CLOSE : BRACKET_OBJECT_CLOSE}
        </Fragment>
    );
};

ObjView.propTypes = {
    obj: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    lvl: PropTypes.number,
    path: PropTypes.array,
    showAlerts: PropTypes.bool,
    showRequired: PropTypes.bool,
};

export default ObjView;
