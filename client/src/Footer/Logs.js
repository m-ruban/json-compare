import React from 'react';
import { AppConsumer } from '../Contexts/Provider';

const Logs = () => (
  <div className="logs pr-3 py-3">
    <div className="list">
      <AppConsumer>
        {({ log }) =>
          log.type && (
            <span className={log.type}>
              <u>log.{log.type}</u>: {log.text}
            </span>
          )
        }
      </AppConsumer>
    </div>
  </div>
);

export default Logs;
