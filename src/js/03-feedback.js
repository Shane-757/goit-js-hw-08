import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');

const LOCAL_STORAGE_KEY = 'feeback-form-state';

let feedbackInfo = []

let formInput = {
    email: document.getElementsByName('email')[0].value,
    message: document.getElementsByName('message')[0].value
}

feedbackForm.addEventListener('input', throttle (handleInput, 500));
feedbackForm.addEventListener('submit', handleSubmit);

function handleInput() {
    feedbackInfo.push(formInput);
}

function handleSubmit() {
    document.querySelector('button').addEventListener('click', addInfo);
}

