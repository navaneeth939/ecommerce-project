function FormValidationn() {
    var uname = document.getElementById("uname").value;
    var pword = document.getElementById("pword").value;

    var unameerror = document.getElementById("unameerror");
    var pworderror = document.getElementById("pworderror");

    unameerror.innerHTML = "";
    pworderror.innerHTML = "";

    var valid = true ;


    if (uname === ""){
        unameerror.innerHTML = "please enter username"
        valid = false;
    }

    if (pword === ""){
        pworderror.innerHTML = "pleace enter correct password"
        valid = false;
    }

    return valid;
};