import React from 'react';

import Mark from 'components/Mark';

const Key = ({ value, isArray }: { value: string; isArray: boolean; }) => {
    if (isArray) {
        return <Mark type="number" text={value} />;
    }
    return <span>{'"'}{value}{'"'}</span>;
};

export default Key;
