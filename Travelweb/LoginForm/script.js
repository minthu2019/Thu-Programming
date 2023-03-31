
const loginTag = document.getElementById("login");
const RegisterTag = document.getElementById("Register");
const btnTag = document.getElementById("btn");

function Register()  {
    loginTag.style.left = "-450px";
    RegisterTag.style.left = "50px";
    btnTag.style.left = "110px ";
}

function login()  {
    loginTag.style.left = "50px";
    RegisterTag.style.left = "450px";
    btnTag.style.left ="0";
}

