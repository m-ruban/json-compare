import React from 'react';
import { Col, Row } from 'reactstrap';

import InputWithPanel from 'components/InputWithPanel';
import JSONView from 'components/JSONView';
import withConsumer from 'hoc/withConsumer';

import 'components/Instrument/Instrument.less';

interface IInstrumentProps {
    isCompare: boolean;
    objStr: string;
    objObject: object;
    changeObj: (event: React.SyntheticEvent) => void;
}

const Instrument = ({ isCompare, objStr, objObject, changeObj }: IInstrumentProps) => {
    if (!isCompare) {
        return null;
    }
    return (
        <Col xs="6">
            <Row className="instrument">
                <JSONView obj={objObject} showAlerts />
                <InputWithPanel str={objStr} change={changeObj} showPanel />
            </Row>
        </Col>
    );
};

export default withConsumer(Instrument);
