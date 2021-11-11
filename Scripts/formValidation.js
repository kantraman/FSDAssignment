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
        Msg.innerHTML = "- Email address cannot be empty.";
        blnReturn = false;
    }
    
    if (blnReturn) {
        blnReturn = validateEmail(email.value);
        if (!blnReturn) {
            Msg.innerHTML = "- Invalid email address.";
            email.style.border = "2px solid red";
        }
    }
        
    
    if (pwd.value.trim() == "") {
        pwd.style.border = "2px solid red";
        if (Msg.innerHTML.trim() != "")
            Msg.innerHTML += "<br>";
        Msg.innerHTML += "- Password cannot be empty.";
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

//Password Strength Checker 

function StrengthChecker(PasswordParameter) {
    let strengthBadge = document.getElementById('StrengthDisp')

    // The strong and weak password Regex pattern checker
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{10,}))')
   
    if (strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if (mediumPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = 'orange'
        strengthBadge.textContent = 'Medium'
    } else {
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Poor'
    }
}

function PasswordInputListener() {
    let password = document.getElementById('inputPassword')
    let strengthBadge = document.getElementById('StrengthDisp')
    let timeout;
    strengthBadge.style.display = 'block'
    clearTimeout(timeout);

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    if (password.value.length !== 0) {
        strengthBadge.style.display != 'block'
    } else {
        strengthBadge.style.display = 'none'
    }
}

//Phone number validation
function phonenumber(inputtxt) {
    var phoneno = /(^\d{10}$)|(^([0-9]{3})\-([0-9]{3})\-([0-9]{4})$)|(^([0-9]{3})\s([0-9]{3})\s([0-9]{4})$)|(^([0-9]{3})\.([0-9]{3})\.([0-9]{4})$)/;
    if(phoneno.test(inputtxt)) {
      return true;
    }
    else {
      return false;
    }
}

function validateSignUpForm() {
    let firstName = document.getElementById("inputFirstName");
    let lastName = document.getElementById("inputLastName");
    let email = document.getElementById("inputEmail");
    let phone = document.getElementById("inputPhone");
    let psw = document.getElementById("inputPassword");
    let rePsw = document.getElementById("inputRetypePassword");
    let Msg = document.getElementById("Msg");

    let strMsg = "";
    let blnValid = true;
    let blnValidEmail = true;
    let blnValidPhone = true;

    firstName.style.border = "";
    lastName.style.border = "";
    email.style.border = "";
    psw.style.border = "";
    rePsw.style.border = "";
    phone.style.border = "";

    Msg.innerHTML = "";

    if (firstName.value.trim() == "") {
        blnValid = false;
        strMsg = "- Enter first name.<br>";
        firstName.style.border = "4px solid red";
    }

    if (lastName.value.trim() == "") {
        blnValid = false;
        strMsg += "- Enter last name.<br>";
        lastName.style.border = "4px solid red";
    }

    if (email.value.trim() == "") {
        blnValid = false;
        strMsg += "- Enter email address.<br>";
        email.style.border = "4px solid red";
    }
    else {
        blnValidEmail = validateEmail(email.value)
        if (!blnValidEmail) {
            blnValid = false;
            strMsg += "- Invalid email address.<br>";
            email.style.border = "4px solid red";
            
        }
    }

    if (phone.value.trim() == "") {
        blnValid = false;
        strMsg += "- Enter mobile no.<br>";
        phone.style.border = "4px solid red";
    }
    else {
        blnValidPhone = phonenumber(phone.value)
        if (!blnValidPhone) {
            blnValid = false;
            strMsg += "- Invalid mobile phone.<br>";
            phone.style.border = "4px solid red";
        }
    }

    if (psw.value.trim() == "") {
        blnValid = false;
        strMsg += "- Enter Password.<br>";
        psw.style.border = "4px solid red";
    }
    else {
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
        if (!strongPassword.test(psw.value)) {
            blnValid = false;
            strMsg += "- Password should be minimum 8 characters with at least one uppercase, one lowercase, and one number.<br>";
            psw.style.border = "4px solid red";
            psw.value = "";
            rePsw.value = "";
        }
    }

    if (rePsw.value.trim() == "") {
        blnValid = false;
        strMsg += "- Retype Password.<br>";
        rePsw.style.border = "4px solid red";
    } else {
        if (psw.value.trim() != rePsw.value.trim()) {
            rePsw.value = "";
            blnValid = false;
            strMsg += "- Passwords dont match.<br>";
            rePsw.style.border = "4px solid red";
        }
    }
        

    Msg.innerHTML = strMsg;
    return blnValid;
}

function ShowHideBorder(obj) {
    if (document.getElementById("Msg").innerHTML != "") {
        if (obj.value.trim() == "") {
            obj.style.border = "4px solid red";
        } else {
            obj.style.border = "";
        }
     
        switch (obj.id) {
            case "inputPassword":
                let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
                if (!strongPassword.test(obj.value))
                    obj.style.border = "4px solid red";
                break;
            case "inputEmail":
                if (!validateEmail(obj.value))
                    obj.style.border = "4px solid red";
                break;
            case "inputPhone":
                if (!phonenumber(obj.value))
                    obj.style.border = "4px solid red";
                break;
    
            default:
                break;
        }
    }
}

    


