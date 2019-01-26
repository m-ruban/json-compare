import React, {Component} from 'react'
import {
  Row, Container, Col, ListGroup, ListGroupItem,
  ListGroupItemHeading, ListGroupItemText, Badge
} from 'reactstrap'


class List extends Component {

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
        <Row>
          <Col xs={8}>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>For what?</ListGroupItemHeading>
                <ListGroupItemText>
                  This tool is being used for studying the <b>JSON</b> object hierarchy and comparing two <b>JSON</b> objects.<br /> Also, in the presence of the possibility of comparing two <b>JSON</b> objects.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Comparison types</ListGroupItemHeading>
                <ListGroupItemText>
                  The application has three types of comparison:<br />
                  1) <b>==</b> - the application uses no strict equality (13 == '13')<br />
                  2) <b>===</b> - the application uses strict equality (13 !== '13')<br />
                  3) <b>Ignore</b> - the application ignore value of the key
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Comparison results</ListGroupItemHeading>
                <ListGroupItemText>
                  <Badge color="req" pill>!</Badge> - required key<br />
                  <Badge color="diff" pill>!</Badge> - the key exists, but it's value doesn't match the required one<br />
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }

}

export default List