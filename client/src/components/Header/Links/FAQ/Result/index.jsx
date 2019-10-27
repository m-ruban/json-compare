import React from 'react';
import { Badge } from 'reactstrap';
import trl from 'modules/translation';

const Result = () => (
    <div>
        <ol>
            <li>
                <Badge color="req" pill>
                    !
                </Badge>
                {trl('FAQ.ComparisonResult.required')}
            </li>
            <li>
                <Badge color="diff" pill>
                    !
                </Badge>
                {trl('FAQ.ComparisonResult.difference')}
            </li>
        </ol>
    </div>
);

export default Result;
