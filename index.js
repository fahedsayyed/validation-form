let username = document.getElementById("username");
let password = document.getElementById("password");
function validateform() {
    if (username.value = "") {
        document.getElementById("username").innerHTML = "empty fill ";
    }
    return false;
}