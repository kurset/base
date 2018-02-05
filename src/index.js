import Traverse from './traverse';


window.$ = function(selector) {
    return $.fn.init(selector);
}

$.fn = $.prototype;

$.fn.init = function(selector, context) {
    // DOM element nodetype === 1
    if (selector.nodeType === 1) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    var parent = context || document;
    var nodeList = parent.querySelectorAll(selector);

    this.length = nodeList.length;

    for (var i = 0; i < this.length; i += 1) {
        this[i] = nodeList[i];
    }
    return this;
}

$.extend = $.fn.extend = function(destination, source) {

    if (typeof source === 'undefined') {
        source = destination;
        destination = this;
    }

    for (var property in source) {
        if (source.hasOwnProperty(property)) {
            destination[property] = source[property];
        }
    }
}

//遍历函数
$.fn.extend(Traverse);
