import React, { Component } from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import { AppConsumer } from '../../Contexts/Provider'
import Tool from './Tests/Tool'
import Obj from './Tests/Obj'

class DropdownTests extends Component {

  constructor(props) {
    super(props)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <AppConsumer>
        {
          ({ changeTool, changeObj }) => (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} nav>
              <DropdownToggle nav caret>Examples</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={changeTool.bind(this, Tool)}>Tool Example</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={changeObj.bind(this, Obj)}>Object Example</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )
        }
      </AppConsumer>
    )
  }

}

export default DropdownTests