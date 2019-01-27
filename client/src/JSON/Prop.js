import React from 'react'
import PropTypes from 'prop-types'
import Scalar from './Entities/Scalar'
import Obj from './Entities/Obj/Brackets'

const Prop = ({value, lvl, showAlerts, showRequired, path}) => {
  if (typeof value === 'object' && value) {
    return (
      <Obj
        obj={value}
        path={path}
        lvl={lvl+1}
        showAlerts={showAlerts}
        showRequired={showRequired}
      />
    )
  }

  return (
    <Scalar
      path={path}
      value={value}
      showAlerts={showAlerts}
      showRequired={showRequired}
    />
  )
}

Prop.propTypes = {
  value: PropTypes.any,
  lvl: PropTypes.number,
  path: PropTypes.array,
  showAlerts: PropTypes.bool,
  showRequired: PropTypes.bool
}

Prop.defaultProps = {
  lvl: 1,
  path: []
}

export default Prop
