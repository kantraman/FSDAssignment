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
    var phoneno = /^(\(?([0-9]{3})\)?\-?([0-9]{3})\-?([0-9]{4}))|(\(?([0-9]{3})\)?\s?([0-9]{3})\s?([0-9]{4}))|(\(?([0-9]{3})\)?\.?([0-9]{3})\.?([0-9]{4}))$/;
    if(phoneno.test(inputtxt)) {
      return true;
    }
    else {
      alert("message");
      return false;
    }
  }

