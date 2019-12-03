import React, { Fragment } from 'react';

import Alert from 'components/JSONView/ObjView/PrimitiveType/Alert';
import { IAlertMap } from 'constants/interfaces';
import { STRING_TYPE } from 'constants/types';
import withConsumer from 'hoc/withConsumer';

interface IPrimitiveTypeProps extends IAlertMap {
    value: boolean | string | number;
    showAlerts: boolean;
    showRequired: boolean;
    path: string[];
}

const PrimitiveType = ({ value, showAlerts, showRequired, path, alerts }: IPrimitiveTypeProps) => {
    const mark = typeof value === STRING_TYPE ? '"' : null;
    const key = path.join('-');
    const rValue = value !== null ? value.toString() : 'null';
    return (
        <span>
            {mark}
            {rValue}
            {mark}
            <Alert alert={alerts.get(key)} showAlerts={showAlerts} showRequired={showRequired} />
        </span>
    );
};

export default withConsumer(PrimitiveType);
