function SubmitButtonClick(){
    // get values using DOM
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // clear old message
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    
    let isValid = true;
    if (name == ""){
        document.getElementById('nameError').innerHTML = "please enter the name";
        isValid = false;
    }
    if (email == "" || email.indexof("@gamil.com") == -1){
        document.getElementById('emailError').innerHTML = "please enter the email";
        isValid = false;
    }
    if (password == "" || password.length <= 6){
        document.getElementById('passwordError').innerHTML = "please enter the password";
        isValid = false;
    }
}