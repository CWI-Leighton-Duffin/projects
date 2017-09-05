/**
 * Created by leigh on 8/26/2017.
 */

var getStatus = function (date) {
    //return "closed" if Sunday
    if (date.getDay() === 0) {
        return 'Closed';
    //return "closed" if outside business hours
    } else if (date.getHours() < 10 || date.getHours() > 19) {
        return 'Closed';
    } else return 'Open';
};

window.onload = function () {
    var date = new Date();

    //set date and status on home page
    $('#date').text((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
    $('#status').text(getStatus(date));
};
