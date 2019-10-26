import React from 'react';
import { FormGroup, Input, Form } from 'reactstrap';
import { AppConsumer } from 'context';
import { EQUALITY_TYPE_STRICT, EQUALITY_TYPE_NOT_STRICT, EQUALITY_TYPE_IGNORE } from 'constants/equality';

const EqualityTypes = () => (
    <Form className="settings" inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <AppConsumer>
                {({ equalityTypes, changeEqualityTypes }) => (
                    <Input
                        type="select"
                        id="typeCompare"
                        bsSize="sm"
                        value={equalityTypes}
                        onChange={changeEqualityTypes}
                    >
                        <option value={EQUALITY_TYPE_STRICT}>{EQUALITY_TYPE_STRICT}</option>
                        <option value={EQUALITY_TYPE_NOT_STRICT}>{EQUALITY_TYPE_NOT_STRICT}</option>
                        <option value={EQUALITY_TYPE_IGNORE}>{EQUALITY_TYPE_IGNORE}</option>
                    </Input>
                )}
            </AppConsumer>
        </FormGroup>
    </Form>
);

export default EqualityTypes;
