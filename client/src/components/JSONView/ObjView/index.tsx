import React from 'react';

import CompositeView from 'components/JSONView/ObjView/CompositeView';
import PrimitiveType from 'components/JSONView/ObjView/PrimitiveType';

interface IObjViewProps {
    value: any[] | object;
    lvl: number;
    path: string[];
    showAlerts: boolean;
    showRequired: boolean;
}

const ObjView = ({ value, lvl, showAlerts, showRequired, path }: IObjViewProps) => {
    if (typeof value === 'object' && value) {
        return (
            <CompositeView obj={value} path={path} lvl={lvl + 1} showAlerts={showAlerts} showRequired={showRequired} />
        );
    }
    return <PrimitiveType path={path} value={value} showAlerts={showAlerts} showRequired={showRequired} />;
};

ObjView.defaultProps = {
    lvl: 1,
    path: [],
};

export default ObjView;
