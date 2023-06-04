let wrapper = document.getElementById("wrapper");
let wrapperTwo = document.getElementById("wrapperTwo");
let usernameInput = document.getElementById("usernameInput");
let usernameInputs = document.getElementById("usernameInputs");
let passwordInput = document.getElementById("passwordInput");
let passwordInputs = document.getElementById("passwordInputs");
let emailInput = document.getElementById("emailInput");
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");
let registerButton = document.getElementById("registerButton");
let kaisar = document.getElementById("kaisar");
let pMenteri = document.getElementById("pMenteri");
let menteri = document.getElementById("menteri");
let petarunk = document.getElementById("petarunk");
let npcStudent = document.getElementById("npcStudent");
let unrole = document.getElementById("unrole");

wrapper.style.display = "block";
wrapperTwo.style.display = "none";
kaisar.style.display = "none";
pMenteri.style.display = "none";
menteri.style.display = "none";
petarunk.style.display = "none";
npcStudent.style.display = "none";
unrole.style.display = "none";
logoutButton.style.display = "none";

function onRegister() {

    if (usernameInput.value == "kaisar" && emailInput.value == "kaisar@gmail.com" && passwordInput.value == "kaisar123") {
        wrapperTwo.style.display = "block";
        wrapper.style.display = "none";
    } else if (usernameInput.value == "perdana menteri" && emailInput.value == "pmenteri@gmail.com" && passwordInput.value == "pmenteri") {
        wrapperTwo.style.display = "block";
        wrapper.style.display = "none";
    } else if (usernameInput.value == "menteri" && emailInput.value == "menteri@gmail.com" && passwordInput.value == "menteri123") {
        wrapperTwo.style.display = "block";
        wrapper.style.display = "none";
    } else if (usernameInput.value == "petarunk" && emailInput.value == "petarunk@gmail.com" && passwordInput.value == "petarunk123") {
        wrapperTwo.style.display = "block";
        wrapper.style.display = "none";
    } else if (usernameInput.value == "npc student" && emailInput.value == "npcstudent@gmail.com" && passwordInput.value == "npcstudent") {
        wrapperTwo.style.display = "block";
        wrapper.style.display = "none";
    } else {
        wrapperTwo.style.display = "block";
        wrapper.style.display = "none";
    }
}

function onLogin() {
    localStorage.setItem("username", usernameInput.value);
    logoutButton.style.display = "block";

    if (usernameInputs.value == "kaisar" && passwordInputs.value == "kaisar123") {
        wrapperTwo.style.display = "none"
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "kaisar")
        kaisar.style.display = "block";
        pMenteri.style.display = "none";
        menteri.style.display = "none";
        petarunk.style.display = "none";
        npcStudent.style.display = "none";
        unrole.style.display = "none";
    } else if (usernameInputs.value == "perdana menteri" && passwordInputs.value == "pmenteri") {
        wrapperTwo.style.display = "none"
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "pMenteri")
        kaisar.style.display = "none";
        pMenteri.style.display = "block";
        menteri.style.display = "none";
        petarunk.style.display = "none";
        npcStudent.style.display = "none";
        unrole.style.display = "none";
    } else if (usernameInputs.value == "menteri" && passwordInputs.value == "menteri123") {
        wrapperTwo.style.display = "none"
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "menteri")
        kaisar.style.display = "none";
        pMenteri.style.display = "none";
        menteri.style.display = "block";
        petarunk.style.display = "none";
        npcStudent.style.display = "none";
        unrole.style.display = "none";
    } else if (usernameInputs.value == "petarunk" && passwordInputs.value == "petarunk123") {
        wrapperTwo.style.display = "none"
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "petarunk")
        kaisar.style.display = "none";
        pMenteri.style.display = "none";
        menteri.style.display = "none";
        petarunk.style.display = "block";
        npcStudent.style.display = "none";
        unrole.style.display = "none";
    } else if (usernameInputs.value == "npc student" && passwordInputs.value == "npcstudent") {
        wrapperTwo.style.display = "none"
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "npcStudent")
        kaisar.style.display = "none";
        pMenteri.style.display = "none";
        menteri.style.display = "none";
        petarunk.style.display = "none";
        npcStudent.style.display = "block";
        unrole.style.display = "none";
    } else {
        wrapperTwo.style.display = "none"
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "noRole")
        kaisar.style.display = "none";
        pMenteri.style.display = "none";
        menteri.style.display = "none";
        petarunk.style.display = "none";
        npcStudent.style.display = "none";
        unrole.style.display = "block";
    }
}

if (localStorage.getItem("username")) {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    if (localStorage.getItem("role" == "kaisar")) {
        kaisar.style.display = "block";
        pMenteri.style.display = "none";
        menteri.style.display = "none";
        petarunk.style.display = "none";
        npcStudent.style.display = "none";
    } else if (localStorage.getItem("role" == "pMenteri")) {
        kaisar.style.display = "none";
        pMenteri.style.display = "block";
        menteri.style.display = "none";
        petarunk.style.display = "none";
        npcStudent.style.display = "none";
    } else if (localStorage.getItem("role" == "menteri")) {
        kaisar.style.display = "none";
        pMenteri.style.display = "none";
        menteri.style.display = "block";
        petarunk.style.display = "none";
        npcStudent.style.display = "none";
    } else if (localStorage.getItem("role" == "petarunk")) {
        kaisar.style.display = "none";
        pMenteri.style.display = "none";
        menteri.style.display = "none";
        petarunk.style.display = "block";
        npcStudent.style.display = "none";
    } else if (localStorage.getItem("role" == "npcStudent")) {
        kaisar.style.display = "none";
        pMenteri.style.display = "none";
        menteri.style.display = "none";
        petarunk.style.display = "none";
        npcStudent.style.display = "block";
    }
}

function onLogout() {
    localStorage.clear();
    location.reload();
}

