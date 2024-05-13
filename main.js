const name = prompt("Please enter your first name");
const lastname = prompt("Please enter your lastname");
const favcolor = prompt("What's your favorite color?");

const fullpwd = `${name}${lastname}${favcolor}${"21"}`;
document.getElementById("pwd").innerHTML = fullpwd;
console.log(fullpwd);

// console only without ${"21"}
//console.log(fullpwd + 21); 