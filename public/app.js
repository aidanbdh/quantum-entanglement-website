const React = require('react')
const { connect } = require('react-redux')
const Populations = require('./populations')

const App = () => { <Populations/> }

const mapStateToProps = state => {
 return state
}

module.exports = connect(mapStateToProps)(App)

//Remove linter errors
{
  React,
  Populations
}
