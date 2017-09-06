/**
 * Created by leigh on 8/26/2017.
 */

var $ = function (selector) {
    switch (selector.charAt(0)) {
        case '.':
            return document.getElementsByClassName(selector.substring(1));
        case '#':
            return document.getElementById(selector.substring(1));
        default:
            return document.getElementsByTagName(selector);
    }
};

var submitForm = function () {
    sessionStorage.clear();
    var firstName = $('#firstName').value;
    var lastName = $('#lastName').value;
    var email = $('#inputEmail').value;
    var phone = $('#inputPhone').value;
    var emailAt = false;
    var emailDot = false;
    var valid = true;

    //Form Validation
    if (firstName == '') {
        $('#firstError').textContent = 'Please provide a first name.';
        valid = false;
    } else $('#firstError').textContent = '';
    if (lastName == '') {
        $('#lastError').textContent = 'Please provide a last name.';
        valid = false;
    } else $('#lastError').textContent = '';
    for (var i = 0; i < email.length; ++i) {
        if (email.charAt(i) === '@') emailAt = true;
        if (email.charAt(i) === '.') emailDot = true;
    }
    if (!emailAt || !emailDot) {
        $('#emailError').textContent = 'Please provide a valid email address.';
        valid = false;
    } else $('#emailError').textContent = '';
    if (!/^(\d{3}[-\. ]?|\(\d{3}\)[-\. ]?)\d{3}[-\. ]?\d{4}$/.test(phone)) { //regex validate phone number
        $('#phoneError').textContent = "Please provide a valid 10-digit phone number.";
        valid = false;
    } else {
        $('#phoneError').textContent = '';
        phone = phone.replace(/(\(|\)|-|\.| )/g, ''); //regex strip phone number to digits only
    }
    //Submit form if valid
    if (valid) {
        sessionStorage.firstName = firstName;
        sessionStorage.lastName = lastName;
        sessionStorage.email = email;
        sessionStorage.phone = phone;
        if (!$('#genFeedback').checked && !$('#privSession').checked) sessionStorage.reason = 'none';
        else {
            if ($('#genFeedback').checked) {
                sessionStorage.reason ? sessionStorage.reason += ', ' + 'general feedback' : sessionStorage.reason = 'general feedback';
            }
            if ($('#privSession').checked) {
                sessionStorage.reason ? sessionStorage.reason += ', ' + 'private session' : sessionStorage.reason = 'private session';
            }
        }
        sessionStorage.comments = $('#commentsArea').value;

        window.location.href = "contact-success.html";
    }
};

window.onload = function () {
    if (sessionStorage.length > 0) {
        $('#name').textContent = sessionStorage.firstName + ' ' + sessionStorage.lastName;
        $('#email').textContent = sessionStorage.email;
        $('#phone').textContent = sessionStorage.phone;
        $('#reason').textContent = sessionStorage.reason;
        $('#comments').textContent = sessionStorage.comments;
    }
};