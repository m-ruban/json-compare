import React from 'react';

import Mark from 'components/Mark';
import { getType } from 'modules/compare';

interface IType {
    value: string;
}

const Type = ({ value }: IType) => {
    const type = getType(value);
    return <Mark type={type} text={type} />;
};

export default Type;
