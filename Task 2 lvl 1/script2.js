const form = document.querySelector("#form");

const nameInput = document.querySelector('input[type="text"]');

const emailInput = document.querySelector('input[type="email"]');

const phoneInput = document.querySelector('input[type="tel"]');

const passwordInput = document.querySelector('input[type="password"]');

const errors = document.querySelectorAll(".error");
const success = document.querySelector("#success");

form.addEventListener("submit", function(event){
    event.preventDefault();


const name = nameInput.value;
const email = emailInput.value;
const phone = phoneInput.value;
const password = passwordInput.value;



if (name === "") {
    errors[0].textContent = "Please enter your name";
}

if (!email.includes("@")) {
    errors[1].textContent ="Please enter a valid email";
}

if (phone.length < 10) {
    errors[2].textContent= "Please enter a valid phone number";
}

if (password.length < 8 || !/\d/ .test(password)) {
    errors[3].textContent = "Passwords must be atleast 8 characters and contain a number";
}

if(
    name !== "" &&
    email.includes("@") &&
    phone.length >= 10  &&
    password.length >=8 

) {
    success.textContent = "Form submitted successfully!";
    form.reset();
}
});

// Nameinput
nameInput.addEventListener("blur", function() {
    if (nameInput.value === "") {
        errors[0].textContent = "Please enter your name";
    }
});

nameInput.addEventListener("focus", function(){
    errors[0].textContent = "";
});

// email input
emailInput.addEventListener("blur", function() {
    if ( !emailInput.includes("@")) {
        errors[1].textContent = "Please enter a valid email";
    }
    });

emailInput.addEventListener("focus", function(){
    errors[1].textContent = "";
});

// phoneinput
phoneInput.addEventListener("blur", function() {
    if (phoneInput.value.length<10) {

        errors[2].textContent = "Please enter a valid phone number";
    }
});

phoneInput.addEventListener("focus", function(){
    errors[2].textContent = "";
});

// Passwordinput
passwordInput.addEventListener("blur", function(){
    if (passwordInput.value.length<8) {

        errors[3].textContent = "Password must be atleast 8 characters";
    }
});

passwordInput.addEventListener("focus",function(){

    errors[3].textContent = "";
});
