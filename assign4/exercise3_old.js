


document.getElementById("submitbtn").onclick = function() { displayform() };

function displayform() {
    console.log("name: " + document.getElementById("name").value);
    console.log("e-mail: " + document.getElementById("email").value);
    console.log("feedback: " + document.getElementById("feedback").value);
}