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
    player.hit(_.random(10,25));
    bgHealth.text(hacker.health);
    ggHealth.text(player.health);
  }
  //clears input
  this.reset();

  });


