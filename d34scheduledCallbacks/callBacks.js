/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";
function timer(from, to){
  var now = from;
  var inter = setInterval(function run(){
    if(now < to){
      alert(now);
    }else if(now === to){
      clearInterval(inter);
    }
    now++;}, 1000);
}
timer(5, 10);

/////////////////////////////////////////////////////////////////////////////////////////////
function counter(from, to){
  var now = from;
  var timer = setTimeout(function run(){
    if(now < to){
      alert(now);
      now++;
      run(now, 1000);
    }}, 1000);
}
counter(5, 10);