import React, { useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';
import 'components/Header/Switch/Switch.less';

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
            <span
                className={classNames('switch', 'switch_parse', { switch_pointer: isCompare })}
                onClick={onParseClick}
            >
                {trl('Header.Switch.parse')}
            </span>
            <span className="switch__divider">{trl('Header.Switch.and')}</span>
            <span
                className={classNames('switch', 'switch_compare', { switch_pointer: !isCompare })}
                onClick={onCompareClick}
            >
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
