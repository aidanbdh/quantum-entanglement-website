const { createStore, combineReducers } = require('redux')

const init = {

}

const serverPopulation = (state = init, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({ serverPopulation })

const store = createStore(reducer)

module.exports = store
