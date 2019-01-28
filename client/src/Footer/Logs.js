import React from 'react'
import { AppConsumer } from '../Contexts/Provider'

const Logs = () => (
  <div className="logs pr-3 py-3">
    <div className="list">
      <AppConsumer>
        {
          ({log}) => {
            const {text, type} = log
            return (
              log.type ?
                <span className={type}>
                  <u>log.{type}</u>: {text}
                </span> : null
            )
          }
        }
      </AppConsumer>
    </div>
  </div>
)

export default Logs
