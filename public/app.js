const React = require('react')
const { connect } = require('react-redux')
const Populations = require('./populations')

const App = () =>
<div>
  <a href="https://atom.io/packages/quantum" id="atom">Download Here</a>
  <Populations/>
</div>

module.exports = connect()(App)
