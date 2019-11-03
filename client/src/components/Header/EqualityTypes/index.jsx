import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Form } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import { EQUALITY_TYPE_STRICT, EQUALITY_TYPE_NOT_STRICT, EQUALITY_TYPE_IGNORE } from 'constants/equality';
import 'components/Header/EqualityTypes/EqualityTypes.less';

const EqualityTypes = ({ equalityTypes, changeEqualityTypes }) => (
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

EqualityTypes.propTypes = {
    equalityTypes: PropTypes.string,
    changeEqualityTypes: PropTypes.func,
};

export default withConsumer(EqualityTypes);
