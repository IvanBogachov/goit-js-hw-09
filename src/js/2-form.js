const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
  emailInput.value = formData.email;
  textarea.value = formData.message;
}

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
    evt.preventDefault();
    
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
  console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
  form.reset();
});
