import React, {Component} from 'react'
import {Row, Container} from 'reactstrap'
import Tool from './Items/Tool'
import ObjectCompare from './Items/Obj'

class Form extends Component {

  constructor(props) {
    super(props);
    this.updateSize = this.updateSize.bind(this);
    this.state = {
      height : false
    }
  }

  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize)
  }

  updateSize() {
    const footerHeight = document.getElementsByTagName("footer").item(0).offsetHeight
    const headerHeight = document.getElementsByTagName("header").item(0).offsetHeight
    this.setState({
      height: window.innerHeight - footerHeight - headerHeight
    })
  }

  render() {
    return (
      <Container
        className="pt-4 pb-4"
        style={{height: this.state.height}}
        fluid
      >
        <Row className="h100">
          <Tool />
          <ObjectCompare />
        </Row>
      </Container>
    )
  }

}

export default Form
