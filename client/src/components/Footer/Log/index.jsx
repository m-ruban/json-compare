import React from 'react';
import PropTypes from 'prop-types';
import withConsumer from 'hoc/withConsumer';
import 'components/Footer/Log/Log.less';

const Log = ({ log }) => {
    if (!log.type) {
        return null;
    }

    return (
        <div className="log pr-3 py-3">
            <div className="log__item">
                <div className={`log__${log.type}`}>
                    <span className="log__type">log.{log.type}</span>: {log.text}
                </div>
            </div>
        </div>
    );
};

Log.propTypes = {
    log: PropTypes.shape({
        type: PropTypes.string,
        text: PropTypes.text,
    }),
};

export default withConsumer(Log);
