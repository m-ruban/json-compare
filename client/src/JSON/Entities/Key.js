import React from 'react'
import PropTypes from 'prop-types'
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

Key.propTypes = {
  value: PropTypes.string,
  isArray: PropTypes.bool
}

export default Key
