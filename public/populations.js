const React = require('react')
const { connect } = require('react-redux')
const actions = require('./actions')

const populations = () => {}

const mapDispatchToProps = dispatch => {
  return dispatch
}

module.exports = connect(mapDispatchToProps)(populations)
