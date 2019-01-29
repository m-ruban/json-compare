import React from 'react';
import { FormGroup, Badge, Input, Form, UncontrolledTooltip } from 'reactstrap';
import { AppConsumer } from '../../Contexts/Provider';

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
            <option value="==">==</option>
            <option value="===">===</option>
            <option value="ignore">Ignore</option>
          </Input>
        )}
      </AppConsumer>
      <Badge id="tooltipTypeCompare" color="success" pill>
        ?
      </Badge>
      <UncontrolledTooltip target="tooltipTypeCompare">
        == - not strict equality
        <br />
        === - strict equality
        <br />
        Ignore - comparison ignores values (only keys are compared)
      </UncontrolledTooltip>
    </FormGroup>
  </Form>
);

export default EqualityTypes;
