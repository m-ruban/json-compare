import React from 'react'
import { AppConsumer } from '../Contexts/Provider'
import { Row, Container } from 'reactstrap'
import Logs from './Logs'

const Bar = () => (
  <footer className="bg-light">
    <Container fluid>
      <Row>
        <AppConsumer>
          {
            ({ autor }) => (
              <div className="body text-muted py-3">
                Autor - <a target="_blank" href={autor} rel="noopener noreferrer">DD</a>
              </div>
            )
          }
        </AppConsumer>
        <Logs />
      </Row>
    </Container>
  </footer>
)

export default Bar
