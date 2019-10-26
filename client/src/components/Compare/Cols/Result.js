import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import Prop from 'components/JSON/Prop';

const Result = ({ obj, showAlerts, showRequired }) => (
    <Col xs="7">
        <div className="json result without-panel">
            <Prop value={obj} showAlerts={showAlerts} showRequired={showRequired} lvl={1} />
        </div>
    </Col>
);

Result.propTypes = {
    obj: PropTypes.object,
    showAlerts: PropTypes.bool,
    showRequired: PropTypes.bool,
};

Result.defaultProps = {
    showAlerts: false,
    showRequired: false,
};

export default Result;
