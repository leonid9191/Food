import {
    closeModal,
    openModal
} from './modal';

import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {

    const forms = document.querySelectorAll(formSelector); //all form for callback
    const message = {
        loading: "img/forms/spinner.svg",
        success: "Thank you, we will call you.",
        fail: "Fail...."
    };
    //append "open modal" to all the forms button
    forms.forEach(form => {
        bindPostData(form);
    });


    //Привязка к формам
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); //it's a function for don't reload page after sending form
            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.append(statusMessage);
            const formData = new FormData(form);

            //transformation to JSON format
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            //send to the server
            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success); //show to user message
                    statusMessage.remove();

                }).catch(() => {
                    showThanksModal(message.fail); //show to user message
                }).finally(() => {
                    form.reset();
                });
        });
    }

    //function show to user status message about loading form
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div'); //это модальное окно мы меняем вместо формы заявки
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
}

export default forms;