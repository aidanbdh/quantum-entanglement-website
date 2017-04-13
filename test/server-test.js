/*globals describe it before after*/

const { expect } = require('chai')
const request = require('request')
const app = require('../server/server.js')

describe('server', () => {

  let server

  before(done => {
    server = app.listen(3001, () => { done() })
  })

  after(() => {
    server.close()
  })

  it('tests', done => {

    request.get('http://localhost:3001', { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      expect(body).to.equal(undefined)
      done()
    })

  })

})
