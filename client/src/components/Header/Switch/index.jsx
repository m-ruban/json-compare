import React, { useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';

const Switch = ({ isCompare, toggleCompare }) => {
    const onParseClick = useCallback(() => {
        if (!isCompare) {
            return;
        }
        toggleCompare();
    }, [isCompare, toggleCompare]);
    const onCompareClick = useCallback(() => {
        if (isCompare) {
            return;
        }
        toggleCompare();
    }, [isCompare, toggleCompare]);
    return (
        <Fragment>
            <span className={classNames('parse', { pointer: isCompare })} onClick={onParseClick}>
                {trl('Header.Switch.parse')}
            </span>
            <span className="divider">&</span>
            <span className={classNames('compare', { pointer: !isCompare })} onClick={onCompareClick}>
                {trl('Header.Switch.compare')}
            </span>
        </Fragment>
    );
};

Switch.propTypes = {
    isCompare: PropTypes.bool,
    toggleCompare: PropTypes.func,
};

export default withConsumer(Switch);
