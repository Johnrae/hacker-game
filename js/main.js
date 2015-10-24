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

alert('Youre being hacked! Start mashing those keys bro.')
    setInterval(function(){
      player.hit(_.random(10,25));

      if (player.health <= 0){
        ggHealth.text('Fucked');
      } else {
        ggHealth.text(player.health);
      }
    },1000);
// Setting up ON Events
$('#form').on('submit', function (e) {

  //stop page reload
  e.preventDefault();

  // get string from input
  var string = $('#hackbox').val();
  
  //hit hacker with lenght of string
  hacker.hit(string.length);

  $('bgHealth').append(hacker.health);

  if (hacker.health <= 0) {
    bgHealth.text('Defeated');
    alert('BURNED');
  } else {
    bgHealth.text(hacker.health);
  }


  //clears input
  this.reset();

  });


