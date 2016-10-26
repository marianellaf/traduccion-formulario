 
//Heading

var heading = document.getElementById('form-signin-heading');
heading.innerHTML = "Por favor inicia sesión";

//email
var email = document.getElementsByTagName('inputEmail');
email.innerHTML = "Correo";

//email placeholder
var inputMail = document.getElementById('inputEmail');
inputMail.placeholder = "Correo Electrónico";
//contraseña
var pass = document.getElementsByTagName('inputPassword');
pass.innerHTML = "Contraseña";

// placeholder
var inputPass = document.getElementById('inputPassword');
inputPass.placeholder = "Contraseña";

//recordarme
var check = document.querySelector('label span');
check.innerHTML = "Recordarme";

//boton iniciar
var button = document.querySelector('button');
button.innerHTML = "Iniciar Sesión"; 
