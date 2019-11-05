
var newcolor = "rgb(255,255,255)";
console.log("declare vars");

function ChangeBackgroundColor() {
    newcolor = "rgb(" + (Math.random() * 255) +"," + (Math.random() * 255) + "," + (Math.random() * 255) + ")";
    document.body.style.backgroundColor = newcolor;
    console.log("changing background color");
}

window.addEventListener("resize",ChangeBackgroundColor,false);