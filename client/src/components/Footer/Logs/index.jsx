import React from 'react';
import PropTypes from 'prop-types';
import withConsumer from 'hoc/withConsumer';

const Logs = ({ log }) => {
    if (!log.type) {
        return null;
    }

    return (
        <div className="logs pr-3 py-3">
            <div className="list">
                <span className={log.type}>
                    <u>log.{log.type}</u>: {log.text}
                </span>
            </div>
        </div>
    );
};

Logs.propTypes = {
    log: PropTypes.shape({
        type: PropTypes.string,
        text: PropTypes.text,
    }),
};

export default withConsumer(Logs);
