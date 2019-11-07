import React from 'react';

import Mark from 'components/Mark';
import { COMPARE_DIFF, COMPARE_REQ } from 'constants/compare';

interface IAlert {
    res: string;
    scalar: boolean;
}

interface IAlertProps {
    alert: IAlert;
    showAlerts: boolean;
    showRequired: boolean;
}

const Alert = ({ alert, showAlerts, showRequired }: IAlertProps) => {
    let node = null;
    if ((showAlerts || showRequired) && alert) {
        let show = false;
        if (showAlerts) { show = alert.res === COMPARE_DIFF; }
        if (showRequired && !show) { show = alert.res === COMPARE_REQ; }

        if (show) {
            node = <Mark type={alert.res} text="!" pill />;
        }
    }

    return node;
};

export default Alert;
