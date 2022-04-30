function login(){
var user,pass;
user=document.getElementById("usuario").value;
pass=document.getElementById("contraseña").value;

if(user=="ADMIN" && pass=="000111"||user=="ASISTENTE" && pass=="AAA000"){
    window.location="index.html";
}

}