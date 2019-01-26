import React from 'react'
import {Col} from 'reactstrap'
import Prop from '../../JSON/Prop'

const Result = ({obj, showAlerts, showRequired}) => (
  <Col xs="7">
    <div className="json result without-panel">
      <Prop
        value={obj}
        showAlerts={showAlerts}
        showRequired={showRequired}
        lvl={1}
      />
    </div>
  </Col>
)

export default Result