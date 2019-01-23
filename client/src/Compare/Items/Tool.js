import React from 'react'
import { AppConsumer } from '../../Contexts/Provider'
import {Col, Row} from 'reactstrap'
import Result from './Cols/Result'
import Area from './Cols/Area'

const ToolCompare = () => (
  <AppConsumer>
    {
      ({toolStr, changeTool, toolObject, isCompare}) => (
        <Col xs={isCompare ? "6" : "12"}>
          <Row className="h100">
            <Area
              str={toolStr}
              change={changeTool}
            />
            <Result
              obj={toolObject}
              showRequired
              showAlerts
            />
          </Row>
        </Col>
      )
    }
  </AppConsumer>
)

export default ToolCompare
