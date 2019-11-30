import classNames from 'classnames';
import React from 'react';

import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';

import 'components/Header/Switch/Switch.less';

const Switch = ({ isCompare, toggleCompare }: { isCompare: boolean; toggleCompare: () => void; }) => {
    const onParseClick = React.useCallback(() => {
        if (!isCompare) {
            return;
        }
        toggleCompare();
    }, [isCompare, toggleCompare]);

    const onCompareClick = React.useCallback(() => {
        if (isCompare) {
            return;
        }
        toggleCompare();
    }, [isCompare, toggleCompare]);

    return (
        <>
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
        </>
    );
};

export default withConsumer(Switch);
