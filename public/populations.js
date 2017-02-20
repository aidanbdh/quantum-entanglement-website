const React = require('react')
const { connect } = require('react-redux')
const { Population } = require('./actions')

const populations = ({ server1, server2, server3 }) =>
<div>
{
  Population()
}
  <div className="server">
    <h2>Server 1</h2>
    <div className="content">
      <p>Status: { server1.status }</p>
      <p>Connections: { server1.count }</p>
    </div>
  </div>
  <div className="server">
    <h2>Server 2</h2>
    <div className="content">
      <p>Status: { server2.status }</p>
      <p>Connections: { server2.count }</p>
    </div>
  </div>
  <div className="server">
    <h2>Server 3</h2>
    <div className="content">
      <p>Status: { server3.status }</p>
      <p>Connections: { server3.count }</p>
    </div>
  </div>
</div>

const mapStateToProps = ({ serverPopulation }) => {
  return {
    server1: serverPopulation.server1,
    server2: serverPopulation.server2,
    server3: serverPopulation.server3
  }
}

module.exports = connect(mapStateToProps)(populations)
