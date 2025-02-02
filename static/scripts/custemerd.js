function Formcustemerd(){
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var district = document.getElementById("district").value;
    var city = document.getElementById("city").value;


    var addresserror = document.getElementById("addresserror");
    var pincodeerror = document.getElementById("pincodeerror");
    var districterror = document.getElementById("districterror");
    var cityerror = document.getElementById("cityerror")


    addresserror.innerHTML = '';
    pincodeerror.innerHTML = '';
    districterror.innerHTML = '';
    cityerror.innerHTML = '';

    var valid = true;


    if (address === ""){
        addresserror.innerHTML = 'pleace enter adderss'
        valid = false;
    }

    if (pincode === ""){
        pincodeerror.innerHTML = 'pincode enter number only'
        valid = false;
    }

    if (district === ""){
        districterror.innerHTML = 'enter your correct district'
        valid = false;
    }

    if (city === ""){
        cityerror.innerHTML = 'enter your city'
        valid = false;
    }

    return valid;
};