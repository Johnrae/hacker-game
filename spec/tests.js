(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Badguy = function Badguy(obj) {

  obj = obj || {};

  this.health = 300;

  this.hit = function (num) {
    var hitpoints = num || 5;
    return this.health = this.health - hitpoints;
  };
};

exports["default"] = Badguy;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Goodguy = function Goodguy(obj) {

  obj = obj || {};

  this.health = 300;

  this.hit = function (num) {

    var hitPoints = num || 5;
    return this.health = this.health - hitPoints;
  };
};

exports["default"] = Goodguy;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _goodguy = require('./goodguy');

var _goodguy2 = _interopRequireDefault(_goodguy);

var _badguy = require('./badguy');

var _badguy2 = _interopRequireDefault(_badguy);

(function () {
  'use strict';

  describe('About My Good Guy', function () {

    beforeEach(function () {
      window.x = new _goodguy2['default']();
    });

    describe('creating a good guy', function () {
      it('should create an instance of Good Guy', function () {
        expect(x instanceof _goodguy2['default']).to.equal(true);
      });
    });

    describe('my player health', function () {
      it('should have full health upon creation', function () {
        expect(x.health).to.equal(300);
      });
    });

    describe('player taking damage', function () {
      it('should lower the score, after getting hit', function () {
        x.hit();
        expect(x.health).to.be.below(300);
      });
    });
  });

  describe('About My Bad Guy', function () {

    beforeEach(function () {
      window.x = new _badguy2['default']();
    });

    describe('creating a buy guy', function () {
      it('should create an instance of Good Guy', function () {
        expect(x instanceof _badguy2['default']).to.equal(true);
      });
    });

    describe('bad guy health', function () {
      it('should have full health upon creation', function () {
        expect(x.health).to.equal(300);
      });
    });

    describe('bad guy taking damage', function () {
      it('should lower the score, after getting hit', function () {
        x.hit();
        expect(x.health).to.be.below(300);
      });
    });
  });
})();

//good guy

//bad guy

//both have attack methods

//both will have health

},{"./badguy":1,"./goodguy":2}]},{},[3])


//# sourceMappingURL=tests.js.map
