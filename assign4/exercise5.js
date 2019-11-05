
var newcolor = "rgb(255,255,255)";
console.log("declare vars");

document.getElementById("bckgrnd").onclick = function() { ChangeBackgroundColor() };

function ChangeBackgroundColor() {
    newcolor = "rgb(" + (Math.random() * 255) +"," + (Math.random() * 255) + "," + (Math.random() * 255) + ")";
    // newcolor = "#"+((1<<24)*Math.random()|0).toString(16);
    document.body.style.backgroundColor = newcolor;
    console.log("changing background color to "+newcolor);
}