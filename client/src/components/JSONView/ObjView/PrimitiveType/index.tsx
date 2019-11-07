import React, { Fragment } from 'react';

import Alert from 'components/JSONView/ObjView/PrimitiveType/Alert';
import { STRING_TYPE } from 'constants/types';
import withConsumer from 'hoc/withConsumer';

interface IAlert {
    res: string;
    scalar: boolean;
}

interface IPrimitiveTypeProps {
    value: boolean | string | number;
    showAlerts: boolean;
    showRequired: boolean;
    path: string[];
    alerts: Map<string, IAlert>;
}

const PrimitiveType = ({ value, showAlerts, showRequired, path, alerts }: IPrimitiveTypeProps) => {
    const mark = typeof value === STRING_TYPE ? '"' : null;
    const key = path.join('-');
    const rValue = value !== null ? value.toString() : 'null';
    return (
        <Fragment>
            {mark}
            {rValue}
            {mark}
            <Alert alert={alerts.get(key)} showAlerts={showAlerts} showRequired={showRequired} />
        </Fragment>
    );
};

export default withConsumer(PrimitiveType);
