import React, {Component} from 'react'
import Key from '../Key'
import Type from '../Type'
import Prop from '../../Prop'
import Icon from './Icon'

export class Body extends Component {

  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this)
    this.state = {
      isOpen : true
    }
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  body(isArray) {
    const {obj, lvl, path, showAlerts, showRequired} = this.props,
      margin = `${lvl * 6}px`

    return (
      Object.entries(obj).map(([key, value]) => {
        const newPath = path.slice()
        newPath.push(key)

        return (
          <div
            key={`${key}_${lvl}`}
            style={{marginLeft: margin}}
          >
            <Key
              value={key}
              isArray={isArray}
            />
            :&nbsp;
            <Type value={value}/>
            <Prop
              value={value}
              path={newPath}
              lvl={lvl}
              showAlerts={showAlerts}
              showRequired={showRequired}
            />
          </div>
        )
      })
    )
  }

  render() {
    const isArray = Array.isArray(this.props.obj),
      {isOpen} = this.state

    return (
      <>
        {
          <Icon
            isOpen={isOpen}
            toggleOpen={this.toggleOpen}
          />
        }
        {isArray ? "[" : "{"}
        {isOpen && this.body(isArray)}
        {isArray ? "]" : "}"}
      </>
    )
  }

}

export default Body
