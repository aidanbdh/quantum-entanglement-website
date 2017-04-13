const socket1 = require('socket.io-client').connect('https://quantum-entanglement.herokuapp.com/')
const socket2 = require('socket.io-client').connect('https://quantum-entanglement2.herokuapp.com/')
const socket3 = require('socket.io-client').connect('https://quantum-entanglement3.herokuapp.com/')

console.log('connect')

const Population = dispatch => {

  const action = {
    type: 'populate',
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

  if(socket1.connection) {
    socket1.emit('count')
    socket1.once('count', num => {
      action.server1.count = num
      action.server1.status = 'Online'
      dispatch(action)
    })
  }

  if(socket2.connection) {
    socket2.emit('count')
    socket2.once('count', num => {
      action.server2.count = num
      action.server2.status = 'Online'
      dispatch(action)
    })
  }

  if(socket3.connection) {
    socket3.emit('count')
    socket3.once('count', num => {
      action.server3.count = num
      action.server3.status = 'Online'
      dispatch(action)
    })
  }
}

module.exports = {
  Population
}
