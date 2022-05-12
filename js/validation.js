const submitBut = document.querySelector("#submit-but");
const pwdResult = document.querySelector("#pass-result");
const pwd = document.querySelector("#pass");
const confirmPwd = document.querySelector("#confirm-pass");

function passValidate(){
    
    if (pwd.value.length < 4) {
        pwd.setCustomValidity("Password must be greater than 3 characters");
        pwdResult.innerText = "";
        pwd.reportValidity();
        return;
    }

    if (pwd.value === confirmPwd.value){
        pwd.setCustomValidity("");
        confirmPwd.setCustomValidity("");
        pwdResult.innerText = "";
    }else {

        pwdResult.innerText = "Password not matched!";
        pwd.setCustomValidity(" ");
        confirmPwd.setCustomValidity(" ");
        //currentInput.reportValidity();
    }

}

pwd.addEventListener("keyup", passValidate);
confirmPwd.addEventListener("keyup", passValidate);