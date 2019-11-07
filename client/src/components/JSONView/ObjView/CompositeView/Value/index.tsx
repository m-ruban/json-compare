import React from 'react';

import ObjView from 'components/JSONView/ObjView';
import Key from 'components/JSONView/ObjView/CompositeView/Value/Key';
import Type from 'components/JSONView/ObjView/CompositeView/Value/Type';

interface IValue {
    obj: any[] | object;
    lvl: number;
    path: string[];
    showAlerts: boolean;
    showRequired: boolean;
    isArray: boolean;
}

const Value = ({ obj, lvl, path, showAlerts, showRequired, isArray }: IValue) => (
    <>
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
    </>
);

export default Value;
