const validate = () => {
  // ссылка на форму
  const advertForm = document.querySelector('.ad-form');

  // создаем экземпляр валидатора
  const pristine = new Pristine(advertForm, {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    successClass: 'ad-form__element--valid',
    errorTextParent: 'ad-form__element',
    errorTextTag: 'span',
    errorTextClass: 'text-help'
  });

  // вынесенная функция проверки "Заголовок объявления"
  function validateTitle(value) {
    return value.length >= 30 && value.length <= 100;
  }

  // добавление поля "Заголовок объявления" для проверки валидатором
  const title = advertForm.querySelector('#title');
  pristine.addValidator(title, validateTitle, 'От 30 до 100 символов');

  // добавление проверки поля "Цена за ночь"
  const priceField = document.querySelector('#price');
  pristine.addValidator(priceField, validatePrice, 'Не больше 100000 рублей');
  function validatePrice(value) {
    return value < 100000;
  }

  // добавление проверки полей "Количество комнат" и "Количество мест"
  const roomsField = document.querySelector('[name="rooms"]');
  const guestsField = document.querySelector('[name="capacity"]');

  // таблица для создания логики проверки комнат-мест
  const roomsOption = {
    1: ['1'],
    2: ['1', '2'],
    3: ['1', '2', '3'],
    100: ['0']
  };
  // проверка валидности полей комнат - мест
  function validateRoomsAndCapacity() {
    if (roomsOption[roomsField.value] === 100 && guestsField.value === '0') {
      return true;
    }
    else if (roomsOption[roomsField.value].includes(guestsField.value)) {
      return true;
    }
    return false;
  }

  function getCapacityErrorMessage() {
    if (roomsField.value === '100') {
      return 'Не для гостей';
    } else if (guestsField.value === '0') {
      return 'Необходимо 100 комнат';
    }
    return `Необходимо минимум ${guestsField.value} комнаты.`;
  }

  pristine.addValidator(roomsField, validateRoomsAndCapacity, getCapacityErrorMessage);
  pristine.addValidator(guestsField, validateRoomsAndCapacity, getCapacityErrorMessage);

  // событие, по которому происходит проверка формы
  advertForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export { validate };
