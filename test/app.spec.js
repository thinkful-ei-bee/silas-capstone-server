'use strict';

const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/app');
const knex = require('knex');


describe('App', () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, { 'message':'Hello, world!'});
  });
});