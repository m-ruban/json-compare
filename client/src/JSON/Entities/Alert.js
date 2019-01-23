import React from 'react'
import {Badge} from 'reactstrap'

const Alert = ({id, alert, showAlerts, showRequired}) => {

  let node = null
  if ((showAlerts || showRequired) && alert) {

    let show = false
    if (showAlerts) show = alert.res === 'diff'
    if (showRequired && !show) show = alert.res === 'req'

    if (show) {
      node = <Badge color={alert.res} pill>!</Badge>
    }

  }

  return node
}

export default Alert
