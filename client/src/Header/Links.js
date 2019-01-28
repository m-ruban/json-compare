import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Collapse, NavLink, NavbarToggler } from 'reactstrap'
import DropdownTests from './Examples/DropdownTests'
import withToggleState from '../HOC/withToggleState'

const Links = ({isOpen, toggle, feedback}) => (
  <>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <DropdownTests />
        <NavItem>
          <Link className="nav-link" to="/faq/">FAQ</Link>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            href={feedback}
            target="_blank"
          >
            Feedback
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </>
)

Links.propTypes = {
  feedback: PropTypes.string
}

const LinksWithToggleState = withToggleState(Links)

export default LinksWithToggleState
