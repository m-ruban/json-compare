import tool from 'modules/example/tool';
import React from 'react';
import { Col, Row } from 'reactstrap';

import InputWithPanel from 'components/InputWithPanel';
import JSONView from 'components/JSONView';
import withConsumer from 'hoc/withConsumer';

import 'components/Subject/Subject.less';

interface ISubjectProps {
    isCompare: boolean;
    toolStr: string;
    toolObject: object;
    changeTool: (value: string) => void;
}

const Subject = ({ toolStr, changeTool, toolObject, isCompare }: ISubjectProps) => {
    const onChangeValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        changeTool(event.target.value);
    }, [changeTool]);
    return (
        <Col xs={isCompare ? '6' : '12'}>
            <Row className="subject">
                <InputWithPanel str={toolStr} change={onChangeValue} />
                <JSONView obj={toolObject} showRequired showAlerts />
            </Row>
        </Col>
); };

export default withConsumer(Subject);
