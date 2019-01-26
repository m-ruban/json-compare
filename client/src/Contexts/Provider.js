import React, { Component } from 'react'
import {equalAlerts, parse} from './Helper'
import Constans from '../Constans'

const AppContext = React.createContext()

export class AppProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCompare : false,
      toggleCompare: this.toggleCompare.bind(this),
      toolStr: '',
      toolObject: {},
      changeTool: this.changeTool.bind(this),
      objStr: '',
      objObject: {},
      changeObj: this.changeObj.bind(this),
      equalityTypes: '==',
      changeEqualityTypes: this.changeEqualityTypes.bind(this),
      alerts: new Map(),
      feedback: Constans('FEEDBACK_LINK')
    }
  }

  toggleCompare() {
    const {isCompare} = this.state
    this.setState({isCompare: !isCompare}, this.changeAlerts)
  }

  changeEqualityTypes(event) {
    const {value} = event.target
    this.setState({equalityTypes: value}, this.changeAlerts)
  }

  changeTool(event) {
    const {value} = event.target
    this.setState({toolObject: parse(value), toolStr: value}, this.changeAlerts)

  }

  changeObj(event) {
    const {value} = event.target
    this.setState({objObject: parse(value), objStr: value}, this.changeAlerts)
  }

  changeAlerts() {
    const {toolObject, objObject, equalityTypes, isCompare} = this.state,
      isEmpty = (obj) => Object.keys(obj).length === 0

    if (!isEmpty(toolObject) && !isEmpty(objObject) && isCompare) {
      this.setState({
        alerts: equalAlerts(toolObject, objObject, equalityTypes)
      })
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }

}

export const AppConsumer = AppContext.Consumer