/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "A clown",
    "The air",
    "The cat"
  ];
  let action = [
    "ate",
    "peed on",
    "crushed",
    "broke",
    "stole",
    "burned",
    "drowned"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "my pc",
    "my phone",
    "my bike"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "while I was taking a shower"
  ];

  function excusegenerator(whoP, actionP, whatP, whenP) {
    let whoindex = Math.floor(Math.random() * whoP?.length);
    let actionindex = Math.floor(Math.random() * actionP?.length);
    let whatindex = Math.floor(Math.random() * whatP?.length);
    let whenindex = Math.floor(Math.random() * whenP?.length);

    return (
      whoP[whoindex] +
      " " +
      actionP[actionindex] +
      " " +
      whatP[whatindex] +
      " " +
      whenP[whenindex]
    );
  }
  console.log(excusegenerator(who, action, what, when));
  document.querySelector("#excuse").innerHTML = excusegenerator(
    who,
    action,
    what,
    when
  );
};/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "A clown",
    "The air",
    "The cat"
  ];
  let action = [
    "ate",
    "peed on",
    "crushed",
    "broke",
    "stole",
    "burned",
    "drowned"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "my pc",
    "my phone",
    "my bike"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "while I was taking a shower"
  ];

  function excusegenerator(whoP, actionP, whatP, whenP) {
    let whoindex = Math.floor(Math.random() * whoP?.length);
    let actionindex = Math.floor(Math.random() * actionP?.length);
    let whatindex = Math.floor(Math.random() * whatP?.length);
    let whenindex = Math.floor(Math.random() * whenP?.length);

    return (
      whoP[whoindex] +
      " " +
      actionP[actionindex] +
      " " +
      whatP[whatindex] +
      " " +
      whenP[whenindex]
    );
  }
  console.log(excusegenerator(who, action, what, when));
  document.querySelector("#excuse").innerHTML = excusegenerator(
    who,
    action,
    what,
    when
  );
};/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "A clown",
    "The air",
    "The cat"
  ];
  let action = [
    "ate",
    "peed on",
    "crushed",
    "broke",
    "stole",
    "burned",
    "drowned"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "my pc",
    "my phone",
    "my bike"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "while I was taking a shower"
  ];

  function excusegenerator(whoP, actionP, whatP, whenP) {
    let whoindex = Math.floor(Math.random() * whoP?.length);
    let actionindex = Math.floor(Math.random() * actionP?.length);
    let whatindex = Math.floor(Math.random() * whatP?.length);
    let whenindex = Math.floor(Math.random() * whenP?.length);

    return (
      whoP[whoindex] +
      " " +
      actionP[actionindex] +
      " " +
      whatP[whatindex] +
      " " +
      whenP[whenindex]
    );
  }
  console.log(excusegenerator(who, action, what, when));
  document.querySelector("#excuse").innerHTML = excusegenerator(
    who,
    action,
    what,
    when
  );
};