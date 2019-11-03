import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import withConsumer from 'hoc/withConsumer';
import { STRING_TYPE } from 'constants/types';
import Alert from 'components/JSONView/ObjView/PrimitiveType/Alert';

const PrimitiveType = ({ value, showAlerts, showRequired, path, alerts }) => {
    const mark = typeof value === STRING_TYPE ? '"' : null;
    const key = path.join('-');
    const rValue = value !== null ? value.toString() : 'null';
    return (
        <Fragment>
            {mark}
            {rValue}
            {mark}
            <Alert id={key} alert={alerts.get(key)} showAlerts={showAlerts} showRequired={showRequired} />
        </Fragment>
    );
};

PrimitiveType.propTypes = {
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
    path: PropTypes.array,
    showAlerts: PropTypes.bool,
    showRequired: PropTypes.bool,
    alerts: PropTypes.instanceOf(Map),
};

export default withConsumer(PrimitiveType);
