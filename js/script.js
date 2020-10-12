'use strict';
require('es6-promise-polyfill').Promise;
import 'nodelist-foreach-polyfill';
import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import timer from './modules/timer';
import {
    openModal
} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    tabs('.tabheader__item','.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    calculator();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide : '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter:  '#current',
        wrapper: '.offer__slider-wrapper',
        field : '.offer__slider-inner'

    });
    timer('.timer', '2020-12-12');
});