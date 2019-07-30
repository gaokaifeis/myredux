import React, { Component } from 'react'
import { Provider } from './react-redux/woniu-react-redux'
import { store } from './01.learn.redux'



class NavBar extends Component {

  // static contextType = myContext;

  render () {
    
    return (
      <div>{this.context.user}NavBar</div>
    )
  }
}

class SiderBar extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <p>SiderBar</p>

        {/* <NavBar /> */}
      </div>
      
    )
  }
}

class Page extends Component {

  constructor (props) {
    super(props)
    this.state = {user: '蜗牛'}
  }

  render () {
    return (
        <Provider store={store}>
          <SiderBar />
        </Provider>
    )
  }
}

export default Page