import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import ObjView from 'components/JSONView/ObjView';
import 'components/JSONView/JSONView.less';

const JSONView = ({ obj, showAlerts, showRequired }) => (
    <Col xs="7">
        <div className="json-view bg-dark">
            <ObjView value={obj} showAlerts={showAlerts} showRequired={showRequired} lvl={1} />
        </div>
    </Col>
);

JSONView.propTypes = {
    obj: PropTypes.object,
    showAlerts: PropTypes.bool,
    showRequired: PropTypes.bool,
};

JSONView.defaultProps = {
    showAlerts: false,
    showRequired: false,
};

export default JSONView;
