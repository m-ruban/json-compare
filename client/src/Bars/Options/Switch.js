import React from 'react'

const Swith = ({isCompare, toggleCompare}) => {
  return (
    <>
      <span className={`parse${isCompare ? ' pointer' : ''}`} onClick={isCompare ? toggleCompare : null}>parse</span>
      <span className="divider">&</span>
      <span className={`compare${!isCompare ? ' pointer' : ''}`} onClick={!isCompare ? toggleCompare : null}>compare</span>
    </>
  )
}

export default Swith

