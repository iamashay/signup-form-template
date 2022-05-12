const submitBut = document.querySelector("#submit-but");
const pwdResult = document.querySelector("#pass-result");
const pwd = document.querySelector("#pass");
const confirmPwd = document.querySelector("#confirm-pass");

function passValidate(){
    
    if (pwd.value.length < 4) {
        pwd.setCustomValidity("Password must be greater than 4 characters");
        pwd.reportValidity();
        return;
    }

    if (pwd.value === confirmPwd.value){
        pwd.classList.remove("error");
        confirmPwd.classList.remove("error");
        pwd.setCustomValidity("");
        confirmPwd.setCustomValidity("");
        pwdResult.innerText = "";
    }else {
        pwd.classList.add("error");
        confirmPwd.classList.add("error");
        pwdResult.innerText = "Password not matched!";
        pwd.setCustomValidity(" ");
        confirmPwd.setCustomValidity(" ");
        //currentInput.reportValidity();
    }

}

pwd.addEventListener("keydown", passValidate);
confirmPwd.addEventListener("keydown", passValidate);