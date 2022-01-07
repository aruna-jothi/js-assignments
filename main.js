console.log('Welcome');
window.alert('click me');
document.getElementById("txt").innerHTML = 'New text';

let x=2+6;
document.getElementById("let").innerHTML=x;

const mark1 = 40;
const mark2 = 60;
const tot = mark1 + mark2;
document.getElementById("const").innerHTML=tot;

let str1 = "Everything is Possible";
let str2 = "If we can Beleive";
document.getElementById("const").innerHTML=str1.concat(str2);

let string = "Awesome";
document.getElementById("length").innerHTML=string.length;

let brands="Maruthi, Hyundai, Suzuki, Toyota, Tata";
document.getElementById("slice").innerHTML=brands.slice(8,16);

let colors=["red","blue","black","orange","green"];
document.getElementById("colorslice").innerHTML=colors.slice(3);

let colours=["red","blue","black","orange","green"];

colours.splice(3, 0, "white");
document.getElementById("splice").innerHTML = colours;


colours.pop("green");
document.getElementById("pop").innerHTML = colours;

colours.push("pink");
document.getElementById("push").innerHTML = colours;




















