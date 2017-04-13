const { createStore, combineReducers } = require('redux')

const init = {
  server1: {
    count: 0,
    status: 'Offline'
  },
  server2: {
    count: 0,
    status: 'Offline'
  },
  server3: {
    count: 0,
    status: 'Offline'
  }
}

const serverPopulation = (state = init, action) => {
  switch(action.type) {
    case 'populate':
      return Object.assign({}, state, {
        server1: action.server1,
        server2: action.server2,
        server3: action.server3
      })
    default:
      return state
  }
}

const reducer = combineReducers({ serverPopulation })

const store = createStore(reducer)

module.exports = store
