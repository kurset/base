import $ from '../src/index';

var elem = document.getElementById('wang');

var ajax = {
    get: function() {
        console.log('hello');
    }
}
$.extend(ajax);
console.dir($);

$(elem).each((elem, i) => {
    console.log(elem, i);
});