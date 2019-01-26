import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppConsumer } from '../Contexts/Provider'
import { Nav, NavItem, Collapse, NavLink} from 'reactstrap'
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
          <NavItem>
            <AppConsumer>
              {
                ({feedback}) => (
                  <NavLink
                    className="nav-link"
                    href={feedback}
                    target="_blank"
                  >
                    Feedback
                  </NavLink>
                )
              }
            </AppConsumer>
          </NavItem>
        </Nav>
      </Collapse>
    )
  }

}

export default Navigate
