/**
 * Created by leigh on 8/26/2017.
 */

var $ = function (selector) {
    switch(selector.charAt(0)) {
        case '.':
            return document.getElementsByClassName(selector.substring(1));
        case '#':
            return document.getElementById(selector.substring(1));
        default:
            return document.getElementsByTagName(selector);
    }
};

var submitForm = function () {
    var firstName = $('#firstName').value;
    var lastName = $('#lastName').value;
    var email1 = $('#inputEmail').value;
    var email2 = $('#confirmEmail').value;
    var emailAt = false;
    var emailDot = false;
    var valid = true;

    //Form Validation
    if (firstName == '') {
        $('#firstError').textContent = 'Please provide a first name.';
        valid = false;
    } else $('#firstError').textContent = '';
    for (var i = 0; i < email1.length; ++i) {
        if(email1.charAt(i) === '@') emailAt = true;
        if(email1.charAt(i) === '.') emailDot = true;
    }
    if (!emailAt || !emailDot) {
        $('#email1Error').textContent = 'Please provide a valid email address.';
        valid = false;
    } else $('#email1Error').textContent = '';
    if (email1 !== email2) {
        $('#email2Error').textContent = 'Emails do not match.';
    } else $('#email2Error').textContent = '';
    //Submit form if valid
    if (valid) {
        //store form data in sessionStorage for acknowledgement page
        sessionStorage.firstName = firstName;
        sessionStorage.lastName = lastName;
        sessionStorage.email = email1;

        window.location.href = "newsletter-success.html";
    }
};

window.onload = function () {
    //load acknowledgement form data if applicable
    if (sessionStorage.length > 0) {
        $('#name').textContent = sessionStorage.firstName + ' ' + sessionStorage.lastName;
        $('#email').textContent = sessionStorage.email;
    }
};