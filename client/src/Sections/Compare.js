import React from 'react'
import {Row} from 'reactstrap'
import Tool from '../Compare/Tool'
import ObjectCompare from '../Compare/Obj'
import withContainer from './withContainer'

const Compare = () => (
  <Row className="h100">
    <Tool />
    <ObjectCompare />
  </Row>
)

const CompareWithContainer = withContainer(Compare)

export default CompareWithContainer
