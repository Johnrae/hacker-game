let Goodguy = function (){

  this.health = 300;

  this.hit = function(num){
    let hitPoints = num;
    return this.health = this.health - hitPoints;

  }
};
export default Goodguy;