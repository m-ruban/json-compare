import React from 'react'
import Scalar from './Entities/Scalar'
import Obj from './Entities/Obj/Body'

const Prop = ({value, lvl, showAlerts, showRequired, path = []}) => {
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

export default Prop
