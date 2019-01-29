import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ isCompare, toggleCompare }) => {
  return (
    <>
      <span
        className={`parse${isCompare ? ' pointer' : ''}`}
        onClick={isCompare ? toggleCompare : null}
      >
        parse
      </span>
      <span className="divider">&</span>
      <span
        className={`compare${!isCompare ? ' pointer' : ''}`}
        onClick={!isCompare ? toggleCompare : null}
      >
        compare
      </span>
    </>
  );
};

Switch.propTypes = {
  isCompare: PropTypes.bool,
  toggleCompare: PropTypes.func
};

export default Switch;
