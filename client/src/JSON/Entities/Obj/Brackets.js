import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Body from './Body'
import withToggleState from '../../../HOC/withToggleState'

const Brackets = ({
  obj, lvl, path, showAlerts,
  showRequired, isOpen, toggle
}) => {
  const isArray = Array.isArray(obj)
  return (
    <>
      <Icon
        isOpen={isOpen}
        toggle={toggle}
      />
      {isArray ? "[" : "{"}
      {
        isOpen ?
          <Body
            isArray={isArray}
            obj={obj}
            path={path}
            lvl={lvl}
            showAlerts={showAlerts}
            showRequired={showRequired}
          /> : null
      }
      {isArray ? "]" : "}"}
    </>
  )
}

Brackets.propTypes = {
  obj: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  lvl: PropTypes.number,
  path: PropTypes.array,
  showAlerts: PropTypes.bool,
  showRequired: PropTypes.bool
}

const BracketsWithToggleState = withToggleState(Brackets, true)

export default BracketsWithToggleState
