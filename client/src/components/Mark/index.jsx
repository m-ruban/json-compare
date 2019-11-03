import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import classNames from 'classnames';
import 'components/Mark/Mark.less';

const Mark = ({ type, text, pill, onClick }) => (
    <Badge className={classNames('json-mark', `json-mark_${type}`)} color="json" pill={pill} onClick={onClick}>
        {text}
    </Badge>
);

Mark.propTypes = {
    type: PropTypes.string,
    text: PropTypes.node,
    pill: PropTypes.bool,
    onClick: PropTypes.func,
};

Mark.defaultProps = {
    pill: false,
    onClick: () => {},
};

export default Mark;
