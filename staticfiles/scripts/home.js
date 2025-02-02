function formvalidation(){
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var product = document.getElementById("product").value;
    var number = document.getElementById("number").value;

    var nameerror = document.getElementById("nameerror");
    var addresserror = document.getElementById("addresserror");
    var producterror = document.getElementById("producterror");
    var numbererror = document.getElementById("numbererror");


    nameerror.innerHTML = "";
    addresserror.innerHTML = "";
    producterror.innerHTML = "";
    numbererror.innerHTML = "";

    var valid = true;

    if (name === ""){
        nameerror.innerHTML = "enter your name"
        valid = false;
    }

    if (address === ""){
        addresserror.innerHTML = "pleace enter your address"
        valid = false;
    }

    if (product === ""){
        producterror.innerHTML = "please enter your product name"
        valid = false;
    }

    if (number === ""){
        numbererror.innerHTML = "please enter your phone number"
        valid = false;
    }else if (number.length < 10){
        numbererror.innerHTML = "10 digit pleace enter"
        valid = false;
    }

    return valid;
};


function showSidebar(){
    const sidebar = document.getElementById('sidebar')
    sidebar.style.display = 'flex'
}
function closebar(){
    const sidebar = document.getElementById('sidebar')
    sidebar.style.display = 'none'
}