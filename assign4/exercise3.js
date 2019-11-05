
function DisplayForm() {
    console.log("name: " + document.getElementById("name").value);
    console.log("e-mail: " + document.getElementById("email").value);
    console.log("feedback: " + document.getElementById("feedback").value);
}

function ResetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("feedback").value = "";
}