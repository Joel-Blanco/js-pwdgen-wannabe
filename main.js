'use strict';

const name = prompt("Please enter your first name");
const lastName = prompt("Please enter your lastname");
const favColor = prompt("What's your favorite color?");

const fullPwd = `${name}${lastName}${favColor}${"21"}`;
document.getElementById("pwd").innerHTML = fullPwd;
console.log(fullPwd);

// console only without ${"21"}
//console.log(fullpwd + 21); 