let Badguy = function (){

  this.health = 300;

  this.hit = function(num){
    return this.health = this.health - num;
  }
};

export default Badguy;