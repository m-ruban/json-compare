import React from 'react'
import {Badge} from 'reactstrap'

const Icon = ({isOpen, toggleOpen}) => (
  <Badge
    color="switch"
    onClick={toggleOpen}
  >
    {isOpen ? "-" : "+"}
  </Badge>
)

export default Icon

