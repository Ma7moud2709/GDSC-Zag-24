var field = document.getElementsByClassName('req');
var submit = document.getElementById('sub');
var message = document.getElementsByClassName("message");
function checkValidation(){
    if(field.value == ''){
        message.innerHTML = "Please Entar Valid Data!";
        return false;
    }
}