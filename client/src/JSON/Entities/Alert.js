import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import { COMPARE_REQ, COMPARE_DIFF } from 'constants/compare';

const Alert = ({ alert, showAlerts, showRequired }) => {
    let node = null;
    if ((showAlerts || showRequired) && alert) {
        let show = false;
        if (showAlerts) show = alert.res === COMPARE_DIFF;
        if (showRequired && !show) show = alert.res === COMPARE_REQ;

        if (show) {
            node = (
                <Badge color={alert.res} pill>
                    !
                </Badge>
            );
        }
    }

    return node;
};

Alert.propTypes = {
    alert: PropTypes.object,
    showAlerts: PropTypes.bool,
    showRequired: PropTypes.bool,
};

export default Alert;
