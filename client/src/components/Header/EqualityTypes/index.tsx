import * as React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

import 'components/Header/EqualityTypes/EqualityTypes.less';
import { EQUALITY_TYPE_IGNORE, EQUALITY_TYPE_NOT_STRICT, EQUALITY_TYPE_STRICT } from 'constants/equality';
import withConsumer from 'hoc/withConsumer';

interface IEqualityTypesProps {
    equalityTypes: string;
    changeEqualityTypes: (event: React.SyntheticEvent) => void;
}

const EqualityTypes = ({ equalityTypes, changeEqualityTypes }: IEqualityTypesProps) => (
    <Form className="settings" inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
                type="select"
                className="settings__types"
                bsSize="sm"
                value={equalityTypes}
                onChange={changeEqualityTypes}
            >
                <option value={EQUALITY_TYPE_STRICT}>{EQUALITY_TYPE_STRICT}</option>
                <option value={EQUALITY_TYPE_NOT_STRICT}>{EQUALITY_TYPE_NOT_STRICT}</option>
                <option value={EQUALITY_TYPE_IGNORE}>{EQUALITY_TYPE_IGNORE}</option>
            </Input>
        </FormGroup>
    </Form>
);

export default withConsumer(EqualityTypes);
