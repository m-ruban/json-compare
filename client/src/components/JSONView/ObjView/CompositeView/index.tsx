import React from 'react';

import Value from 'components/JSONView/ObjView/CompositeView/Value';
import Mark from 'components/Mark';
import {
    BRACKET_ARRAY_CLOSE,
    BRACKET_ARRAY_OPEN,
    BRACKET_OBJECT_CLOSE,
    BRACKET_OBJECT_OPEN,
    CLOSE_ICON,
    OPEN_ICON,
} from 'constants/compare';

interface ICompositeViewProps {
    obj: any[] | object;
    lvl: number;
    path: string[];
    showAlerts: boolean;
    showRequired: boolean;
}

const CompositeView = ({ obj, lvl, path, showAlerts, showRequired }: ICompositeViewProps) => {
    const isArray = Array.isArray(obj);
    const [isOpen, setOpen] = React.useState(true);
    const toggle = React.useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);

    return (
        <>
            <Mark type="switch" text={isOpen ? OPEN_ICON : CLOSE_ICON} onClick={toggle} />
            {isArray ? BRACKET_ARRAY_OPEN : BRACKET_OBJECT_OPEN}
            {isOpen ? (
                <Value
                    isArray={isArray}
                    obj={obj}
                    path={path}
                    lvl={lvl}
                    showAlerts={showAlerts}
                    showRequired={showRequired}
                />
            ) : null}
            {isArray ? BRACKET_ARRAY_CLOSE : BRACKET_OBJECT_CLOSE}
        </>
    );
};

export default CompositeView;
