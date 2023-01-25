const form = document.getElementById("form");
const username = document.getElementById("Username");
const password = document.getElementById("Password");
const repassword = document.getElementById("RepeatPassword");
const name = document.getElementById("Name");
const gender = document.getElementById("GenderContainer");
const lang = document.getElementById("Lang");
const email = document.getElementById("Email");
const country = document.getElementById("Country");
const zip = document.getElementById("ZIPcode");

// I did not check for patterns as that 
// was done in the regular expression part
// and would be done the same here.

function ValidUsername() {
    return username.value.length >= 5 
        && username.value.length <= 12 
        && username.value.charAt(0) === username.value.charAt(0).toUpperCase();
}

function ValidPassword() {
    return password.value.length >= 12;
}

function ValidRePassword() {
    return repassword.value === password.value 
        && repassword.value.length != 0;
}

function ValidName() {
    return name.value.length != 0;
}

function ValidGender() {
    return document.querySelector('input[name="Gender"]:checked') != null;
}

function ValidLang() {
    return lang.value != "";
}

function ValidEmail() {
    return email.value.length != 0;
}

function ValidCountry() {
    return country.value != "";
}

function ValidZip() {
    return zip.value.length === 6;
}


function val() {
    var ret = true;

    var isValid = ValidUsername();
    var error = document.getElementById("errorUsername");
    if (!isValid) {
        username.className = "invalid";
        error.textContent = "Invalid email!";
        error.className = "errorInvalid";
        ret = false;
    } else {
        username.className = "valid";
        error.className = "errorValid";
        error.textContent = "All Good!";
    }

    isValid = ValidPassword();
    var error = document.getElementById("errorPassword");
    if (!isValid) {
        password.className = "invalid";
        error.className = "errorInvalid";
        error.textContent = "Must contain uppercase, lowercase, number, special character, & be 12 characters long";
        ret = false;
    } else {
        password.className = "valid";
        error.className = "errorValid";
        error.textContent = "All Good!";
    } 

    isValid = ValidPassword();
    var error = document.getElementById("errorPassword");
    if (!isValid) {
        password.className = "invalid";
        error.className = "errorInvalid";
        error.textContent = "Must contain uppercase, lowercase, number, special character, & be 12 characters long";
        ret = false;
    } else {
        password.className = "valid";
        error.className = "errorValid";
        error.textContent = "All Good!";
    } 

    isValid = ValidRePassword();
    var error = document.getElementById("errorRePassword");
    if (!isValid) {
        repassword.className = "invalid";
        error.className = "errorInvalid";
        error.textContent = "Does not match password!";
        ret = false;
    } else {
        repassword.className = "valid";
        error.className = "errorValid";
        error.textContent = "All Good!";
    } 

    isValid = ValidName();
    var error = document.getElementById("errorName");
    if (!isValid) {
        name.className = "invalid";
        error.className = "errorInvalid";
        error.textContent = "Full name required!";
        ret = false;
    } else {
        name.className = "valid";
        error.className = "errorValid";
        error.textContent = "All Good!";
    } 

    isValid = ValidGender();
    var error = document.getElementById("errorGender");
    if (!isValid) {
        gender.style.backgroundColor = "rgb(102, 58, 58)";
        error.className = "errorInvalid";
        error.textContent = "Gender required!";
        ret = false;
    } else {
        gender.style.backgroundColor = "inherit";
        error.className = "errorValid";
        error.textContent = "All Good!";
    } 

    isValid = ValidLang();
    var error = document.getElementById("errorLang");
    if (!isValid) {
        lang.className = "invalid";
        error.className = "errorInvalid";
        error.textContent = "Language required!";
        ret = false;
    } else {
        lang.className = "valid";
        error.className = "errorValid";
        error.textContent = "All Good!";
    } 

    isValid = ValidEmail();
    var error = document.getElementById("errorEmail");
    if (!isValid) {
        email.className = "invalid";
        error.className = "errorInvalid";
        error.textContent = "Language required!";
        ret = false;
    } else {
        email.className = "valid";
        error.className = "errorValid";
        error.textContent = "All Good!";
    } 

    isValid = ValidCountry();
    var error = document.getElementById("errorCountry");
    if (!isValid) {
        country.className = "invalid";
        error.className = "errorInvalid";
        error.textContent = "Language required!";
        ret = false;
    } else {
        country.className = "valid";
        error.className = "errorValid";
        error.textContent = "All Good!";
    } 

    isValid = ValidZip();
    var error = document.getElementById("errorZip");
    if (!isValid) {
        zip.className = "invalid";
        error.className = "errorInvalid";
        error.textContent = "Invalid ZIP Code!";
        ret = false;
    } else {
        zip.className = "valid";
        error.className = "errorValid";
        error.textContent = "All Good!";
    } 

    if (ret) {
        alert(
            "Username: " + username.value + "\n" +
            "Password: " + password.value + "\n" +
            "Name: " + name.value + "\n" +
            "Gender: " + document.querySelector( 'input[name="Gender"]:checked').value + "\n" +
            "Language: " + lang.options[lang.selectedIndex].text + "\n" +
            "Email: " + email.value + "\n" +
            "Bio: " + document.getElementById("Bio").value + "\n" +
            "Address: " + document.getElementById("Address").value + "\n" +
            "City: " + document.getElementById("City").value + "\n" +
            "Country: " + country.options[country.selectedIndex].text + "\n" +
            "ZIp code: " + zip.value
        );
    }
    return ret;
};
