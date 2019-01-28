import React, { Component } from 'react'
import {equalAlerts} from './Helpers/Compare'
import {parseAndLog} from './Helpers/Parse'
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
      feedback: Constans('FEEDBACK_LINK'),
      autor: Constans('AUTOR_LINK'),
      log: {text: '', type: null}
    }
  }

  toggleCompare() {
    const {isCompare} = this.state
    const log = {
      text: 'toggle compare',
      type: Constans('LOG_INFO')
    }

    this.setState(
      {isCompare: !isCompare, log: log},
      this.changeAlerts
    )
  }

  changeEqualityTypes(event) {
    const {value} = event.target
    const log = {
      text: 'change equality types',
      type: Constans('LOG_INFO')
    }

    this.setState(
      {equalityTypes: value, log: log},
      this.changeAlerts
    )
  }

  changeTool(event) {
    const {value} = event.target,
      result = parseAndLog(value),
      {obj, log} = result

    this.setState(
      {toolObject: obj, toolStr: value, log: log},
      this.changeAlerts
    )
  }

  changeObj(event) {
    const {value} = event.target,
      result = parseAndLog(value),
      {obj, log} = result

    this.setState(
      {objObject: obj, objStr: value, log: log},
      this.changeAlerts
    )
  }

  changeAlerts() {
    const {toolObject, objObject, equalityTypes, isCompare} = this.state,
      isEmpty = (obj) => Object.keys(obj).length === 0

    if (
      !isEmpty(toolObject) && !isEmpty(objObject) && isCompare
    ) {
      const alerts = equalAlerts(toolObject, objObject, equalityTypes),
        reqValue = Constans('COMPARE_REQ')

      let req = 0, diff = 0, text = ''

      alerts.forEach((alert) => {
        if (!alert.scalar) return
        switch (alert.res) {
          case reqValue:
            req++
            break;
          default:
            diff++
        }
      })

      if (diff > 0 || req > 0) {
        text = `${diff} alert${diff > 1 ? 's' : ''}, ${req} required`
      } else {
        text = 'objects are equal'
      }

      this.setState({
        alerts: alerts,
        log: {text: text, type: Constans('LOG_INFO')}
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