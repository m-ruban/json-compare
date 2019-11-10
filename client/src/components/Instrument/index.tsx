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
    changeObj: (value: string) => void;
}

const Instrument = ({ isCompare, objStr, objObject, changeObj }: IInstrumentProps) => {
    const onChangeValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        changeObj(event.target.value);
    }, [changeObj]);
    if (!isCompare) {
        return null;
    }
    return (
        <Col xs="6">
            <Row className="instrument">
                <JSONView obj={objObject} showAlerts />
                <InputWithPanel str={objStr} change={onChangeValue} showPanel />
            </Row>
        </Col>
    );
};

export default withConsumer(Instrument);
