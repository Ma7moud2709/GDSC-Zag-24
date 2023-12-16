const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//LogIn

var userName = document.getElementById("Name");
var mail = document.getElementById("Mail");
var password = document.getElementById("Password");
var conPassword = document.getElementById("con-password");
var message = document.getElementById("message");
function checkValidation() {
	//Check Empty
	if (userName.value == "" && mail.value == "" && password.value == "" && conPassword.value == "") {
		message.innerHTML = "Please Entar Valid Data!";
		return false;
	}
	//Check UserName
	else if (userName.value < 3 || userName.value == "") {
		message.innerHTML = "Please Enter Valid UserName!";
		return false;
	}
	//Chack mail
	else if (mail.value < 3 || mail.value == "") {
		message.innerHTML = "Please Enter Valid E-Mail!";
		return false;
	}
	//Check Password
	else if (password.value < 6 || password.value == "") {
		message.innerHTML = "Please Check Your Password (8~16 - Contain Letters, Numbers And Symbols)";
		return false;
	}
	//Check Password Confirmation
	else if (conPassword.value != password.value) {
		message.innerHTML = "Please Chack Password Confirmation";
		return false;
	}
	else {
		return true;
	}
}




const formOpenBtn = document.querySelector("#form-open"),
	home = document.querySelector(".home"),
	formContainer = document.querySelector(".form_container"),
	formCloseBtn = document.querySelector(".form_close"),
	signupBtn = document.querySelector("#signup"),
	loginBtn = document.querySelector("#login"),
	pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
	icon.addEventListener("click", () => {
		let getPwInput = icon.parentElement.querySelector("input");
		if (getPwInput.type === "password") {
			getPwInput.type = "text";
			icon.classList.replace("uil-eye-slash", "uil-eye");
		} else {
			getPwInput.type = "password";
			icon.classList.replace("uil-eye", "uil-eye-slash");
		}
	});
});

signupBtn.addEventListener("click", (e) => {
	e.preventDefault();
	formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
	e.preventDefault();
	formContainer.classList.remove("active");
});