import React from 'react'
import {Col, Input} from 'reactstrap'
import Panel from '../Panel'

const Area = ({str, change, showPanel}) => (
  <Col xs="5">
    <Input
      type="textarea"
      name="text"
      className={`json ${showPanel ? "with-panel" : "without-panel"}`}
      placeholder="Insert JSON string"
      value={str}
      onChange={change}
    />
    {showPanel && <Panel />}
  </Col>
)

export default Area