import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import Constans from '../../Constans';

const Alert = ({ alert, showAlerts, showRequired }) => {
    let node = null;
    if ((showAlerts || showRequired) && alert) {
        let show = false;
        if (showAlerts) show = alert.res === Constans('COMPARE_DIFF');
        if (showRequired && !show) show = alert.res === Constans('COMPARE_REQ');

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
