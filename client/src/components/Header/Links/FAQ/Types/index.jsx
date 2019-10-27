import React from 'react';
import trl from 'modules/translation';
import { EQUALITY_TYPE_IGNORE, EQUALITY_TYPE_NOT_STRICT, EQUALITY_TYPE_STRICT } from 'constants/equality';

const Types = () => (
    <div>
        {trl('FAQ.ComparisonTypes.Answer.text')}
        <ol>
            <li>
                {EQUALITY_TYPE_STRICT} - {trl('FAQ.ComparisonTypes.Answer.noStrict')}
            </li>
            <li>
                {EQUALITY_TYPE_NOT_STRICT} - {trl('FAQ.ComparisonTypes.Answer.strict')}
            </li>
            <li>
                {EQUALITY_TYPE_IGNORE} - {trl('FAQ.ComparisonTypes.Answer.ignore')}
            </li>
        </ol>
    </div>
);

export default Types;
