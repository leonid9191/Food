'use strict';
import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {

    tabs();
    modal('[data-modal]', '.modal');
    cards();
    calculator();
    forms();
    slider();
    timer();
});