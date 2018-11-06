// Javascript Data

function logIn(){
    var username = prompt("Enter your username:");
    document.getElementById("login").innerHTML += (username + ", ");
    var password = prompt("Enter your password");
    document.getElementById("login").innerHTML += (password + " ");
    alert("Thank you very much for sharing! *Remember: do not give your password to anyone, unless you are giving the password to someone you truly trust, or in case of emergency! More thanks for hearing this message!*")
}