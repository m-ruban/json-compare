import React from 'react'
import PropTypes from 'prop-types'
import { AppConsumer } from '../../Contexts/Provider'
import Alert from './Alert'

const Scalar = ({value, showAlerts, showRequired, path}) => {

  const mark = typeof value === 'string' ? "\"" : null,
    key = path.join('-'),
    rValue = value !== null ? value.toString() : 'null'

  return (
    <AppConsumer>
      {
        ({alerts}) => (
          <React.Fragment>
            {mark}
            {rValue}
            {mark}
            {
              <Alert
                id={key}
                alert={alerts.get(key)}
                showAlerts={showAlerts}
                showRequired={showRequired}
              />
            }
          </React.Fragment>
        )
      }
    </AppConsumer>
  )
}

Scalar.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number
  ]),
  path: PropTypes.array,
  showAlerts: PropTypes.bool,
  showRequired: PropTypes.bool
}

export default Scalar
