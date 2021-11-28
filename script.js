console.log("script loaded");
var mailElement = document.getElementById("email")
    
    
    var passElement = document.getElementById("pwd");


    var subButton = document.getElementById("submit");

    var logInElement = document.getElementById("loginForm")
    logInElement.addEventListener('input' , () => {
        if(mailElement.value.length > 0 && passElement.value.length > 0){
            subButton.removeAttribute('disabled');
        } else {
            subButton.setAttribute('disabled' , 'disabled');
        }
    });

function validate(){
    var emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    if(!(emailPattern.test(mailElement.value))){
        alert("Enter a valid e-mail address");
    }else if(passElement.value.length < 8 || passElement.value.length > 12){
        alert("Password must have :\n\n1) 8 to 12 characters\n2) atleast one uppercase character\n3) atleast one lowercase character\n4) atleast one digit\n5) atleast one special character");
    }else{
        var pattern = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?])"
            );
        if(pattern.test(passElement.value)){
            alert(" Login Successful");
        }else{
            alert("Password must have :\n\n 1) 8 to 12 characters\n2) atleast one uppercase character\n3) atleast one lowercase character\n4) atleast one digit\n5)  atleast one special character");
        }
    }
}

