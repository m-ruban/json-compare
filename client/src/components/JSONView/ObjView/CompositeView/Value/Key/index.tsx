import React from 'react';

import Mark from 'components/Mark';

interface IKey {
    value: string;
    isArray: boolean;
}

const Key = ({ value, isArray }: IKey) => {
    if (isArray) {
        return <Mark type="number" text={value} />;
    }
    return <>&quot;{value}&quot;</>;
};

export default Key;
