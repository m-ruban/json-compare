import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ObjView from 'components/JSONView/ObjView';
import Key from 'components/JSONView/ObjView/CompositeView/Value/Key';
import Type from 'components/JSONView/ObjView/CompositeView/Value/Type';

const Value = ({ obj, lvl, path, showAlerts, showRequired, isArray }) => (
    <Fragment>
        {Object.entries(obj).map(([key, value]) => {
            const newPath = path.slice();
            const margin = `${lvl * 6}px`;
            const divKey = `${key}_${lvl}`;
            newPath.push(key);

            return (
                <div key={divKey} style={{ marginLeft: margin }}>
                    <Key value={key} isArray={isArray} />
                    :&nbsp;
                    <Type value={value} />
                    <ObjView
                        value={value}
                        path={newPath}
                        lvl={lvl}
                        showAlerts={showAlerts}
                        showRequired={showRequired}
                    />
                </div>
            );
        })}
    </Fragment>
);

Value.propTypes = {
    obj: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    lvl: PropTypes.number,
    path: PropTypes.array,
    showAlerts: PropTypes.bool,
    showRequired: PropTypes.bool,
    isArray: PropTypes.bool,
};

export default Value;
