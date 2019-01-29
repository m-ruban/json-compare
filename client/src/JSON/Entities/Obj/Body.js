import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key';
import Type from '../Type';
import Prop from '../../Prop';

const Body = ({ obj, lvl, path, showAlerts, showRequired, isArray }) => (
  <>
    {Object.entries(obj).map(([key, value]) => {
      const newPath = path.slice();
      newPath.push(key);

      return (
        <div key={`${key}_${lvl}`} style={{ marginLeft: `${lvl * 6}px` }}>
          <Key value={key} isArray={isArray} />
          :&nbsp;
          <Type value={value} />
          <Prop
            value={value}
            path={newPath}
            lvl={lvl}
            showAlerts={showAlerts}
            showRequired={showRequired}
          />
        </div>
      );
    })}
  </>
);

Body.propTypes = {
  obj: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  lvl: PropTypes.number,
  path: PropTypes.array,
  showAlerts: PropTypes.bool,
  showRequired: PropTypes.bool,
  isArray: PropTypes.bool
};

export default Body;
