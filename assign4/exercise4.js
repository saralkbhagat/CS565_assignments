
var wif = window.innerWidth;
var hif = window.innerHeight;
// console.log("declare vars");
document.getElementById("cw").innerHTML = wif;
document.getElementById("ch").value = hif;
// console.log("set initial values");

window.addEventListener("resize",UpdateVals,false);

function UpdateVals() {
    wif = window.innerWidth;
    hif = window.innerHeight;
    document.getElementById("cw").innerHTML = wif;
    document.getElementById("ch").value = hif;
    // console.log("changing window");
}