import React from 'react'
import { AppConsumer } from '../Contexts/Provider'
import {Col, Row, Badge} from 'reactstrap'

const Panel = () => (
  <AppConsumer>
    {
      ({alerts}) => {
        const nodeAlerts = [],
          nodeRequired = []

        alerts.forEach((alert, path) => {
          if (!alert.scalar) return

          const value = path.split('-').join('->')
          switch (alert.res) {
            case 'req':
              nodeRequired.push(<div key={path}>{value}</div>)
              break;
            default:
              nodeAlerts.push(<div key={path}>{value}</div>)
          }
        })

        return (
          <div className="pt-4 panel">
            <div className="body">
              <Row>
                <Col xs="6">
                  <Badge color="diff" pill>!</Badge> <b>Alerts</b><br />
                  {nodeAlerts}
                </Col>
                <Col xs="6">
                  <Badge color="req" pill>!</Badge> <b>Required</b><br />
                  {nodeRequired}
                </Col>
              </Row>
            </div>
          </div>
        )
      }
    }
  </AppConsumer>
)

export default Panel
