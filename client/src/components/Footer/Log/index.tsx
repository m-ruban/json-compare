import * as React from 'react';

import 'components/Footer/Log/Log.less';
import withConsumer from 'hoc/withConsumer';

interface ILogProps {
    log: { type: string; text: string };
}

const Log = ({ log }: ILogProps) => {
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

export default withConsumer(Log);
