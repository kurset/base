const each = function(fn) {
    for (var i = 0; i < this.length; i += 1) {
        fn.call(this, this[i], i);
    }
}

const size = function() {
    return this.length;
}

module.exports = {
    each,
    size
}
