let Badguy = function (obj){

  obj = obj || {};

  this.health = 300;

  this.hit = function(num){
    let hitpoints = num || 5;
    return this.health = this.health - hitpoints;
  }
};

export default Badguy;