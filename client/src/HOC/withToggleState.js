import React, {Component} from 'react'

const withToggleMenu = (WrappedComponent, defaultOpen = false) => (
  class extends Component {

    constructor(props) {
      super(props)
      this.toggle = this.toggle.bind(this)
      this.state = {
        isOpen: defaultOpen
      }
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <WrappedComponent
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          {...this.props}
        />
      )
    }
  }
)

export default withToggleMenu
