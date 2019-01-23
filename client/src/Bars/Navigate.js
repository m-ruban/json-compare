import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Navbar, NavbarToggler} from 'reactstrap'
import { AppConsumer } from '../Contexts/Provider'
import EqualityTypes from './Options/EqualityTypes'
import Switch from './Options/Switch'
import Links from './Links'

class Navigate extends Component {

  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <AppConsumer>
        {
          ({ isCompare, toggleCompare, changeObj, toolObject }) => (
            <header>
              <Navbar color="light" expand="md" light>
                <Link className="navbar-brand" to="/">JS<img src="/icon.png" alt="icon" />N</Link>
                <Switch isCompare={isCompare} toggleCompare={toggleCompare}/>
                {isCompare && <EqualityTypes />}
                <NavbarToggler onClick={this.toggleMenu} />
                <Links />
              </Navbar>
            </header>
          )}
      </AppConsumer>
    )
  }

}

export default Navigate
