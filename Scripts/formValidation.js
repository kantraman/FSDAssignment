function validateLoginEntry() {
    var email = document.getElementById("inputEmail");
    var pwd = document.getElementById("inputPassword");
    var Msg = document.getElementById("Msg");
    let blnReturn = true;
    email.style.border = "";
    pwd.style.border = "";
    Msg.innerHTML = "";
    
    if (email.value.trim() == "") {
        email.style.border = "2px solid red";
        Msg.innerHTML = "Email address cannot be empty.";
        blnReturn = false;
    }
    
    if (blnReturn) {
        blnReturn = validateEmail(email.value);
        if (!blnReturn) {
            Msg.innerHTML = "Invalid email address.";
            email.style.border = "2px solid red";
        }
    }
        
    
    if (pwd.value.trim() == "") {
        pwd.style.border = "2px solid red";
        if (Msg.innerHTML.trim() != "")
            Msg.innerHTML += "<br>";
        Msg.innerHTML += "Password cannot be empty.";
        blnReturn = false;
    }
    
    return blnReturn
}

function validateEmail(email) {
    let regexp = /^([^_.-][A-Za-z0-9_.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if (!regexp.test(email.trim()))
        return false;
    else
        return true;
}