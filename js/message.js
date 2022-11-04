
const bodyElement = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;
const alertMessageTemplate = document.querySelector('#alert').content;

const closeSuccessMessage = () => {
  const successMessage = document.querySelector('.success');
  successMessage.remove();
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  document.removeEventListener('click', closeSuccessMessage);
};

const closeAlertMessage = () => {
  const successMessage = document.querySelector('.alert');
  successMessage.remove();
  document.removeEventListener('keydown', onAlertMessageEscKeydown);
  document.removeEventListener('click', closeAlertMessage);
};

const closeErrorMessage = () => {
  const errorMessage = document.querySelector('.error');
  errorMessage.remove();
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  document.removeEventListener('click', closeErrorMessage);
};

function onSuccessMessageEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessMessage();
  }
}

function onAlertMessageEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeAlertMessage();
  }
}

function onErrorMessageEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessage();
  }
}

const showSuccessMessage = () => {
  const successMessageFragment = document.createDocumentFragment();
  const successMessageElement = successMessageTemplate.cloneNode(true);
  successMessageFragment.appendChild(successMessageElement);
  bodyElement.appendChild(successMessageFragment);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  document.addEventListener('click', closeSuccessMessage);
};

const showAlertMessage = () => {
  const alertMessageFragment = document.createDocumentFragment();
  const alertMessageElement = alertMessageTemplate.cloneNode(true);
  alertMessageFragment.appendChild(alertMessageElement);
  bodyElement.appendChild(alertMessageFragment);
  document.addEventListener('keydown', onAlertMessageEscKeydown);
  document.addEventListener('click', closeAlertMessage);
};

const showErrorMessage = () => {
  const errorMessageFragment = document.createDocumentFragment();
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  const closeButton = errorMessageElement.querySelector('.error__button');
  errorMessageFragment.appendChild(errorMessageElement);
  bodyElement.appendChild(errorMessageFragment);
  closeButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onErrorMessageEscKeydown);
  document.addEventListener('click', closeErrorMessage);
};

export { showErrorMessage, showSuccessMessage, showAlertMessage };
