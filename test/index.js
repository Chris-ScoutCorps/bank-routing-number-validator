'use strict';
const val = require('../index');
const assert = require('assert');

describe('ABA Routing Number Tests',function() {
  it('Should fail an alphanumeric value',function() {
    assert.equal(val.ABARoutingNumberIsValid('abcdacbde'), false);
  });

  it('Should fail a number greater that 9 digits',function() {
    assert.equal(val.ABARoutingNumberIsValid('1234567890'), false);
  });

  it('Should pass this real bank routing number',function() {
    assert.equal(val.ABARoutingNumberIsValid('021000021'), true);
  });

  it('Should pass this real bank routing number as an integer',function() {
    assert.equal(val.ABARoutingNumberIsValid(322271627), true);
  });

  it('Dopes are going to make these ints so we should handle it',function() {
    assert.equal(val.ABARoutingNumberIsValid(21000021), true);
  });

  it('Should fail this real-looking number (first two digits)',function() {
    assert.equal(val.ABARoutingNumberIsValid(131000021), false);
  });

  it('Should fail this real-looking number (checksum)',function() {
    assert.equal(val.ABARoutingNumberIsValid(322271628), false);
  });

  it('Should fail a null',function() {
    assert.equal(val.ABARoutingNumberIsValid(null), false);
  });

});