import React from 'react';

import ObjView from 'components/JSONView/ObjView';
import { Col } from 'reactstrap';

import 'components/JSONView/JSONView.less';

interface IJSONViewProps {
    obj: object;
    showAlerts: boolean;
    showRequired: boolean;
}

const JSONView = ({ obj, showAlerts, showRequired }: IJSONViewProps) => (
    <Col xs="7">
        <div className="json-view bg-dark">
            <ObjView value={obj} showAlerts={showAlerts} showRequired={showRequired} lvl={1} />
        </div>
    </Col>
);

JSONView.defaultProps = {
    showAlerts: false,
    showRequired: false,
};

export default JSONView;
