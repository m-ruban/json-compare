import React from 'react';
import trl from 'modules/translation';
import Mark from 'components/Mark';

const Result = () => (
    <div>
        <ol>
            <li>
                <Mark type="req" text="!" pill />
                {trl('FAQ.ComparisonResult.required')}
            </li>
            <li>
                <Mark type="diff" text="!" pill />
                {trl('FAQ.ComparisonResult.difference')}
            </li>
        </ol>
    </div>
);

export default Result;
