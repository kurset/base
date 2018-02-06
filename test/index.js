import expect from 'expect.js';

import $ from '../src/index';

mocha.setup('bdd');

describe('Init base', function() {
    it('选择器选择一个元素', function() {
        var wordElem = document.getElementById('word');
        expect($('#word')[0]).to.be(wordElem);
    });
    it('选择器选择多个元素', function() {
        var elemList = document.querySelectorAll('.li-item');
        expect($('.li-item')[0]).to.be(elemList[0]);
    });
});

mocha.run();