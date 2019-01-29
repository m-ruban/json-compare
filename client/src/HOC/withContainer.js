import React, { Component } from 'react';
import { Container } from 'reactstrap';

const withContainer = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.updateSize = this.updateSize.bind(this);
      this.state = {
        height: false
      };
    }

    componentDidMount() {
      this.updateSize();
      window.addEventListener('resize', this.updateSize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateSize);
    }

    updateSize() {
      const footerHeight = document.getElementsByTagName('footer').item(0)
        .offsetHeight;
      const headerHeight = document.getElementsByTagName('header').item(0)
        .offsetHeight;
      this.setState({
        height: window.innerHeight - footerHeight - headerHeight
      });
    }

    render() {
      return (
        <Container
          className="pt-4 pb-4"
          style={{ height: this.state.height }}
          fluid
        >
          <WrappedComponent />
        </Container>
      );
    }
  };

export default withContainer;
