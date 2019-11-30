import React from 'react';

import Mark from 'components/Mark';
import { getType } from 'modules/compare';

const Type = ({ value }: { value: string; }) => {
    const type: string = getType(value);
    return <Mark type={type} text={type} />;
};

export default Type;
