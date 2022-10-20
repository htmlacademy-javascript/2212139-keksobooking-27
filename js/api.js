import { resetForm } from './form.js';

const URL = 'https://26.javascript.pages.academy/keksobooking/data';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(
      URL
    );
    if (!response.ok) {
      throw new Error('Не удалось загрузить объявления');
    }
    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);

  }
};

const sendData = async (formData, onSuccess, onFail) => {
  try {
    const response = await fetch(
      'https://26.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    }
    onSuccess();
    resetForm();
  } catch (error) {
    onFail(error.message);
  }
};

export { getData, sendData };
