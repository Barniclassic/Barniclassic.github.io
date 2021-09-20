/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";

function delay(f, num){
    return function wrap(){
      setTimeout(() => f.apply(this, arguments), num);
    }
  }
  // create wrappers
  let f1000 = delay(alert, 1000);
  let f1500 = delay(alert, 1500);
  
  f1000("test"); // shows "test" after 1000ms
  f1500("test"); // shows "test" after 1500ms