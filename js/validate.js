const advertForm = document.querySelector('.ad-form'); // для добавления на форму стороннего валидатора

const pristine = new Pristine(advertForm, { // создаем валидатор
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

function validateTitle(value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(advertForm.querySelector('#title'), validateTitle);

advertForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
