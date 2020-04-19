function cambiar(){
    var error="The username you entered doesn't belong to an account. Please check your username and try again.";
    document.getElementById("error").innerHTML=error;
}
document.getElementById("cambiar").onclick = function (){
    cambiar();
}