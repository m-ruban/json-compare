import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'reactstrap'
import { AppConsumer } from '../Contexts/Provider'
import EqualityTypes from './Options/EqualityTypes'
import Switch from './Options/Switch'
import Links from './Links'

const Bar = () => (
  <header>
    <AppConsumer>
      {
        ({ isCompare, toggleCompare, feedback }) => (
          <Navbar color="light" expand="md" light>
            <Link className="navbar-brand" to="/">
              JS<img src="/icon.png" alt="icon" />N
            </Link>
            <Switch
              isCompare={isCompare}
              toggleCompare={toggleCompare}
            />
            {
              isCompare &&
              <EqualityTypes />
            }
            <Links feedback={feedback} />
          </Navbar>
        )
      }
    </AppConsumer>
  </header>
)

export default Bar
