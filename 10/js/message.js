
const ALERT_SHOW_TIME = 5000;

const bodyElement = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;


const showAlert = (message) => {
  const alertElement = document.createElement('div');
  alertElement.style.zIndex = '100';
  alertElement.style.position = 'absolute';
  alertElement.style.left = '0';
  alertElement.style.top = '0';
  alertElement.style.right = '0';
  alertElement.style.padding = '10px 3px';
  alertElement.style.fontSize = '20px';
  alertElement.style.textAlign = 'center';
  alertElement.style.backgroundColor = 'red';

  alertElement.textContent = message;

  document.body.append(alertElement);

  setTimeout(() => {
    alertElement.remove();
  }, ALERT_SHOW_TIME);
};

const closeSuccessMessage = () => {
  const successMessage = document.querySelector('.success');
  successMessage.remove();
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  document.removeEventListener('click', closeSuccessMessage);
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

export { showErrorMessage, showSuccessMessage, showAlert };
