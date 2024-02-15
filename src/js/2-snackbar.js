import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function showNotificationError(delay) {
    iziToast.error({
    message: `❌ Rejected promise in ${delay}ms`,
    position: 'topRight',
    timeout: 2000,
    close: false,
    overlay: false,
    displayMode: 'once',
    color: '#EF4040',
    messageColor: '#FFFFFF',
    messageSize: '16px',
    iconColor: '#FFFFFF',
    icon: '',
    theme: 'dark',
    messageLineHeight: '24px',
    });
}

function showNotificationSuccess(delay) {
    iziToast.success({
    message: `✅ Fulfilled promise in ${delay}ms`,
    position: 'topRight',
    timeout: 2000,
    close: false,
    overlay: false,
    displayMode: 'once',
    color: '#59A10D',
    messageColor: '#FFFFFF',
    messageSize: '16px',
    iconColor: '#FFFFFF',
    icon: '',
    theme: 'dark',
    messageLineHeight: '24px',
    });
}

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) { 
    e.preventDefault();
    const delay = Number(e.currentTarget.elements.delay.value);
    const state = e.currentTarget.elements.state.value;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then(value => {
            const message = `✅ Fulfilled promise in ${value}ms`;
            console.log(message);
            showNotificationSuccess(value);
        })
        .catch(error => {
            const message = `❌ Rejected promise in ${error}ms`;
            console.log(message);
            showNotificationError(error);
    });
    
    e.currentTarget.reset();
}