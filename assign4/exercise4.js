
var wif = document.innerWidth;
var hif = document.innerHeight;
console.log("declare vars");

window.addEventListener("onresize",UpdateVals,false);

function UpdateVals() {
    wif = window.innerWidth;
    hif = window.innerHeight;
    document.getElementById("cw").value = wif;
    document.getElementById("ch").value = hif;
    console.log("changing window");
}