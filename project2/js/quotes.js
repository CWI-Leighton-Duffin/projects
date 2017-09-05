/**
 * Created by leigh on 8/26/2017.
 */

var calculateQuote = function() {
    clearFormErrors();

    //get variables from user
    var numOfAdults = parseInt($('#numberOfAdults').val());
    var numOfChildren = parseInt($('#numberOfChildren').val());
    var guns = $('#gunsToggle').attr('aria-pressed');
    var armor = $('#armorToggle').attr('aria-pressed');
    var ammo = $('#ammoToggle').attr('aria-pressed');
    var total = 0;
    var valid = true;

    //validate input from user
    if (isNaN(numOfAdults) || isNaN(numOfChildren) || numOfAdults === "" || numOfChildren === "") {
        valid = false;
        if (isNaN(numOfAdults) || numOfAdults === "") $('#numOfAError').text('Invalid Entry.');
        if (isNaN(numOfChildren) || numOfChildren === "") $('#numOfCError').text('Invalid Entry.');
    }
    else if (numOfAdults + numOfChildren > 20 || numOfAdults + numOfChildren < 0) {
        valid = false;
        $('#numOfAError').text('Invalid Entry. Total attendants must be between 0 and 20.');
    }

    //calculate total
    if(valid) {
        //calculate attendants amounts
        total += numOfAdults * 10;
        total += numOfChildren * 5;

        //calculate equipment Rentals
        if (guns === 'true') {
            total += (numOfAdults + numOfChildren) * 10;
        }
        if (armor  === 'true') {
            total += (numOfAdults + numOfChildren) * 5;
        }
        if (ammo === 'true') {
            total += (numOfAdults + numOfChildren) * 5;
        }
        $('#quote').text('Quote: $' + total);
    }
};

//clear form errors
var clearFormErrors = function() {
    $('#numOfAError, #numOfCError').text('');
};

window.onload = function () {
    $("#calculateQuoteButton").click (function () {
        calculateQuote();
    });
};
