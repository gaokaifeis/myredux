import React from 'react'
import ReactDOM from 'react-dom'
// , applyMiddleware, compose
import { createStore, applyMiddleware} from './woniu-redux'
import thunk from './woniu-redux-thunk'
import Arraythunk from './woniu-redux-array'
import { counter } from './index.redux'
import { Provider } from './react-redux/woniu-react-redux';
import App from './App'

// const store = createStore(counter, compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ))

const store = createStore(counter, applyMiddleware(thunk, Arraythunk))

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'))