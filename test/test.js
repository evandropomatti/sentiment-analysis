var expect = require('chai').expect;
var assert = require('assert');
var service = require('../src/service');

describe('getFace()', function () {
  it('sad face', function () {
    var score = 0
    var face = service.getFace(score);
    expect(face).to.be.equal('😢');
  })
});

describe('getFace()', function () {
  it('sad face', function () {
    var score = 0
    var face = service.getFace(score);
    assert.equal(face, '😢');
  })
});
