import React, { Component } from 'react'

import myContext from './context'
import { bindActionCreators } from '../woniu-redux'


export const connect = (mapStateToProps=state => state, mapDispatchToProps={}) => (WrapComponent) => {
  return class ConnectComponent extends Component {
    static contextType = myContext
    constructor (props) {
      super(props)
      this.state = {
        props: {}
      }
    }

    componentDidMount () {
      const { store } = this.context
      store.subscribe(() => this.update())
      this.update()
    }

    update () {
      const { store } = this.context
      const stateProps = mapStateToProps(store.getState())
      const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
      this.setState({
        props: {
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      })
    }

    render () {
      return <WrapComponent {...this.state.props}></WrapComponent>
    }

  }
}



export class Provider extends Component {
  constructor (props) {
    super(props)
    const { store } = props
    this.state = {
      store
    }
  }

  render () {
    return (
      <myContext.Provider value={this.state}>
        {this.props.children}
      </myContext.Provider>
    )
  }
}