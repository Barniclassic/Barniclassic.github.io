/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";
function timer(from, to){
  let now = from;
  let inter = setInterval(function (){
    if(now < to){
      console.log(now);
    }else if(now === to){
      clearInterval(inter);
    }
    now++;}, 1000);
}
timer(0, 10);

/////////////////////////////////////////////////////////////////////////////////////////////
function counter(from, to){
  let now = from;
  setTimeout(function run(){
    if(now < to){
      console.log(now);
      now++;
      run(now, 3000);
    }}, 3000);
}
counter(5, 10);