

const thunk = ({dispatch, getState}) => (next) => (action) => {

  // console.log(action)
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  //  默认，什么都没干
  return next(action)
}

export default thunk