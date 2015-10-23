let Goodguy = function (obj){

  obj = obj || {};

  this.health = 300;

  this.hit = function(num){

    let hitPoints = num || 5;
    return this.health = this.health - hitPoints;

  };
};

export default Goodguy;