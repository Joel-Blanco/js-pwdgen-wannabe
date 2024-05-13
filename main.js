const name = prompt("Please enter your first name");
const lastName = prompt("Please enter your lastname");
const favColor = prompt("What's your favorite color?");

const fullPwd = `${name}${lastname}${favcolor}${"21"}`;
document.getElementById("pwd").innerHTML = fullpwd;
console.log(fullpwd);

// console only without ${"21"}
//console.log(fullpwd + 21); 