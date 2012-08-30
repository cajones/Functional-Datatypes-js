if (typeof exports === 'object' && typeof define !== 'function') {
  define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function (require, exports, module) {

  var Maybe = function (value) {
    this.value = value;
  };
  Maybe.prototype = {

    just : function (value) {
      return new Maybe(value);
    },

    nothing: function() {
      return new Maybe(null);
    },

    hasValue : function () {
      return (this.value !== null && this.value !== undefined);
    },

    isJust : function () {
      return this instanceof Maybe && this.hasValue();
    },

    isNothing : function () {
      return this instanceof Maybe  && !this.hasValue();
    },

    failover : function (def, func) {
      if(this instanceof Maybe && this.isJust()) {
        if(func !== undefined && func instanceof Function) {
          return func(this.value);
        }
        return this.value;
      }
      return def;
    },

    bind : function (binder) {
      return this.isJust() ? new Maybe(binder) : this.nothing();
    }

  };

  return new Maybe();

});