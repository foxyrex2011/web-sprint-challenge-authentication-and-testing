// Write your tests here
const db = require('../data/dbConfig')
const server = require('./server')
const request = require('supertest')

test('sanity', () => {
  expect(true).toBe(true)
})
