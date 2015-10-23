let Badguy = function (){

  this.health = 300;

  this.hit = function(num){
    let hitPoints = num;
    return this.health = this.health - hitPoints;
  }
};