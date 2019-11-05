
function displayform() {
    console.log("name: " + document.getElementById("name").value);
    console.log("e-mail: " + document.getElementById("email").value);
    console.log("feedback: " + document.getElementById("feedback").value);
}

// var mybtn = document.getElementById("submitbtn");
// mybtn.onclick = displayform();

// document.getElementById("submitbtn").onclick = function() { displayform() };

document.getElementById("submitbtn").addEventLister("onclick", displayform, false);

