import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Collapse} from 'reactstrap'
import DropdownTests from './Examples/DropdownTests'

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
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <DropdownTests />
          <NavItem>
            <Link className="nav-link" to="/faq/">FAQ</Link>
          </NavItem>
        </Nav>
      </Collapse>
    )
  }

}

export default Navigate
