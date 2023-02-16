import throttle from "lodash.throttle";

const LOCAL_STORAGE_KEY = 'feeback-form-state';

let form = document.querySelector('form');

document.querySelector('form').addEventListener('submit', addInfo);

form.addEventListener('input', throttle(storeInput, 500));

restoreInput();

function addInfo(event) {
   if (document.getElementsByName('email')[0].value === "" || document.getElementsByName('message')[0].value === "") {
      return alert("all fields must be filed");
   } else {
      
      event.preventDefault();
      console.log(localStorage);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      event.currentTarget.reset();
   }
}

function storeInput() {
      let info = {
         email: document.getElementsByName('email')[0].value,
         message: document.getElementsByName('message')[0].value,
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(info));
   }

function restoreInput() {
   let filledForm = localStorage.getItem(LOCAL_STORAGE_KEY);
   if (filledForm) {
      filledForm = JSON.parse(filledForm);
      Object.entries(filledForm).forEach(([name, value]) => {
         form.elements[name].value = value;
      });
   }
}


