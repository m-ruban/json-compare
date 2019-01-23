import React from 'react'
import {Badge} from 'reactstrap'

const Key = ({value, isArray}) => {

  if (isArray){
    return (
      <Badge color="number">{value}</Badge>
    )
  }

  return (
    <>"{value}"</>
  )

}

export default Key
