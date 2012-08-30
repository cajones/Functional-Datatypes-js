var Maybe = require('../maybe.js');
var expect = require('expect.js');

describe('Given a maybe with just a value', function () {

  var the_value = "the value";
  var the_maybe = Maybe.just(the_value);

  describe('when checking its state', function () {
    it('should have a value', function () {
      expect(the_maybe.hasValue()).to.be(true);
    });

    it('should provide the value', function (){
      expect(the_maybe.value).to.be(the_value);
    });
  });

  describe('when failing over', function () {
    it('should provide the value', function () {
      expect(the_maybe.failover("not the value")).to.be(the_value);
    });
  });

  describe('when binding', function () {
    it('should provide a maybe containing the bound value', function () {
      var the_bound_value = "bound value";
      var result = the_maybe.bind(the_bound_value);
      expect(result.value).to.be(the_bound_value);
    });

  it('should provide a maybe containing the bound value', function () {
      var the_bound_value = "bound value";
      var result = the_maybe.bind(the_bound_value);
      expect(result.value).to.be(the_bound_value);
    });
  });

});

describe('Given a maybe with nothing', function () {

  var the_maybe = Maybe.nothing();

  describe('when checking its state', function () {
    it('should not have a value', function () {
      expect(the_maybe.hasValue()).to.not.be(true);
    });

    it('should provide the value', function (){
      expect(the_maybe.value).to.not.be.ok();
    });
  });

  describe('when failing over', function () {
    it('should provide the value', function () {
      var not_the_value ="not the value";
      expect(the_maybe.failover(not_the_value)).to.be(not_the_value);
    });
  });

  describe('when binding', function () {
    it('should provide a maybe containing nothing', function () {
      var the_bound_value = "bound value";
      var result = the_maybe.bind(the_bound_value);
      expect(result.isNothing()).to.be(true);
    });
  });

});