/**
 * Created by leigh on 8/26/2017.
 */

var $ = function(id) { return document.getElementById(id); };

var toggle = function() {
    var link = this.firstChild;
    var h2 = this;
    var div = h2.nextElementSibling;

    // toggle plus and minus image in h2 elements by adding or removing a class
    h2.className = h2.className === 'minus' ? '' : 'minus';

    // toggle div visibility by adding or removing a class
    div.className = h2.className === 'minus' ? 'open' : '';
};

window.onload = function() {
    // get the a tags
    var faqs = $("faqs");
    var linkElements = faqs.getElementsByTagName("h2");

    // attach event handler for each a tag
    for (var i = 0; i < linkElements.length; i++ ) {
        linkElements[i].onclick = toggle;
    }
};