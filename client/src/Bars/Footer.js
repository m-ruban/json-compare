import React from 'react'
import { AppConsumer } from '../Contexts/Provider'

const Footer = () => (
  <footer className="bg-light">
    <AppConsumer>
      {
        ({ autor }) => (
          <div className="autor text-muted py-3">Autor -&nbsp;
            <a target="_blank" href={autor} rel="noopener noreferrer">DD</a>
          </div>
        )
      }
    </AppConsumer>
  </footer>
)

export default Footer
