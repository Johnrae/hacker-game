import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import Goodguy from './goodguy';
import BadGuy from './badguy';


// Good Guy Instance
let player = new Goodguy();

// Bad Guy Instance
let hacker = new BadGuy();

// DOM Nodes Selected
let ggHealth = $('.ggHealth');
let bgHealth = $('.bgHealth');


// Show current (default) health
ggHealth.text(player.health);
bgHealth.text(hacker.health);


$(window).load(function(){

alert("You're being hacked! Better start mashing those keys dude, or youre gonna be TOAST!");

let start = setInterval(function(){
      player.hit(_.random(10,30));
      ggHealth.text(player.health);
   
    if (player.health <= 0 && hacker.health >= 0){
     ggHealth.text('is Fucked');
     alert('YOU LOSE SUCKER')
     clearInterval(start)
   } else if (hacker.health <= 0) {
    bgHealth.text('0');
    alert('Great job, you won!');
    clearInterval(start)
  } else {
    bgHealth.text(hacker.health);
  }



    },1000);
});

// Setting up ON Events
$('#form').on('submit', function (e) {

  //stop page reload
  e.preventDefault();

  // get string from input
  var string = $('#hackbox').val();
  
  //hit hacker with lenght of string
  hacker.hit(string.length);

  $('bgHealth').text(hacker.health);

  //clears input
  this.reset();

  });
