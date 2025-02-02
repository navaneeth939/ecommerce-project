function ValiDation() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var uname = document.getElementById('uname').value;
    var pword = document.getElementById('pword').value;
    var cpassword = document.getElementById('cpassword').value;


    var fnameerror = document.getElementById('fnameerror');
    var lnameerror = document.getElementById('lnameerror');
    var emailerror = document.getElementById('emailerror');
    var unameerror = document.getElementById('unameerror');
    var pworderror = document.getElementById('pworderror');
    var cpassworderror = document.getElementById('cpassworderror');


    fnameerror.innerHTML = "";
    lnameerror.innerHTML = "";
    emailerror.innerHTML = "";
    unameerror.innerHTML = "";
    pworderror.innerHTML = "";
    cpassworderror.innerHTML = "";



    var valid = true;

    if (fname === ""){
        fnameerror.innerHTML = 'please fill the first name'
        valid = false;
    }

    if (lname === ""){
        lnameerror.innerHTML = 'please fill the last name'
        valid = false;
    }

    if (email === ""){
        emailerror.innerHTML = 'please fill the email'
        valid = false;
    }else if (email ===  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'){
        emailerror.innerHTML ='enter this number and @ Capital letters'
        valid = false;
    }

    if (uname === ""){
        unameerror.innerHTML = 'please fill the uname'
        valid = false;
    }

    if (pword === ""){
        pworderror.innerHTML = 'please fill the password'
        valid = false;
    }else if (pword.lenght < 10){
        pworderror.innerHTML = 'maximum 10 characters pleace'
        valid = false;
    }

    if (cpassword ===""){
        cpassworderror.innerHTML = 'please fill the conform password'
        valid = false;
    }


    return valid;
};