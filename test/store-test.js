/*globals describe it */

const { expect } = require('chai')
const store = Object.assign({}, require('../public/store.js'))
const { Population } = require('../public/actions.js')

describe('reducers', () => {

  describe('Population', () => {

    it('gets population from servers and updates the state', () => {
      Population(store.dispatch)
      expect(store.getState()).to.be.an('object')
      expect(store.getState().serverPopulation.server1.status).to.equal('Offline')
    })

  })

})
