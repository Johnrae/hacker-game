import GoodGuy from './goodguy';
import BadGuy from './badguy'

(function() {
  'use strict';

  describe('About My Good Guy', function() {

    beforeEach( function() {
      window.x = new GoodGuy();
    });

    describe('creating a good guy', function() {
      it('should create an instance of Good Guy', function () {
        expect(x instanceof GoodGuy).to.equal(true);
      });
    });

    describe('my player health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(300);
      });
    });

    describe('player taking damage', function() {
      it('should lower the score, after getting hit', function() {
        x.hit();
        expect(x.health).to.be.below(300);
      })

    });

  });

 describe('About My Bad Guy', function() {

    beforeEach( function() {
      window.x = new BadGuy();
    });

    describe('creating a buy guy', function() {
      it('should create an instance of Good Guy', function () {
        expect(x instanceof BadGuy).to.equal(true);
      });
    });

    describe('bad guy health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(300);
      });
    });

    describe('bad guy taking damage', function() {
      it('should lower the score, after getting hit', function() {
        x.hit();
        expect(x.health).to.be.below(300);
      })
      
    });



  }); 

}());

//good guy

//bad guy

//both have attack methods

//both will have health