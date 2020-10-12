'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        cards = require('./modules/cards'),
        calculator = require('./modules/calculator'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider'),
        timer = require('./modules/timer');

    tabs();
    modal();
    cards();
    calculator();
    forms();
    slider();
    timer();
});