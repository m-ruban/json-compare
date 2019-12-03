import React from 'react';

import classNames from 'classnames';
import { Badge } from 'reactstrap';

import 'components/Mark/Mark.less';

const Mark = ({ type, text, pill, onClick }: { type: string; text: string; pill: boolean; onClick: () => void; }) => (
    <Badge className={classNames('json-mark', `json-mark_${type}`)} color="json" pill={pill} onClick={onClick}>
        {text}
    </Badge>
);

Mark.defaultProps = {
    onClick: () => null,
    pill: false,
};

export default Mark;
