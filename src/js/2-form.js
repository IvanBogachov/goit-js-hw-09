const form = document.querySelector('.feedback-form');
let formData = {
  // email: '',
  // message: '',
};

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(localStorage.getItem(`feedback-form-state`));//зчитуємо дані з localStorage під ключем feedback-form-state
  // console.log(formDataFromLS);

  if (formDataFromLS === null) {
    return;
  }// перевірка, якщо немає данніх в localStorage

  formData = formDataFromLS;// запишимо дані до formData для того щоб не губились дані при перезавантаженні сторінки

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      // console.log('key', key);
      form.elements[key].value = formDataFromLS[key]; //звертаємось до форми, до псевдомассива elements до елемента змінної key,  і записуємо в цей key значення value = звертаємось до котрий перебираємо, по ключю key і записуємо значення котре знаходилось в localStorage
    }
  }//перебираємо об'єкт formDataFromLS, маємо доступ до ключа в змінній key, робимо перевірку на власні чи не власні властивості
};
fillFormFields();

const onFormFielChange = event => {
  const fieldName = event.target.name; //зчитуємо значення атрибута name
  const fieldValue = event.target.value;//зчитуємо значення яке користувач ввів в поле для введення

  // console.log(`${fiedName} ${fieldValue}`);

  formData[fieldName] = fieldValue;//записуємо в formData ці данні

  // console.log(formData);

  localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));  //записуємо об'єкт formData в localStorage під ключем feedback-form-state в рядковому представленні
};

const onFeedBackFormSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }// Якщо будь-яке з полів (властивостей об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields».
  console.log(formData);
    
  event.target.reset();// очищаємо форму
  localStorage.removeItem(`feedback-form-state`);// очищаємо значення в localStorage з ключем feedback-form-state
  formData = {};
};

form.addEventListener('input', onFormFielChange);
form.addEventListener('submit', onFeedBackFormSubmit);

