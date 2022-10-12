const validate = () => {
  // ссылка на форму
  const advertForm = document.querySelector('.ad-form');

  // создаем экземпляр валидатора
  const pristine = new Pristine(advertForm, {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    successClass: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextTag: 'fieldset',
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
  const capacityField = document.querySelector('[name="capacity"]');

  // таблица для создания логики проверки комнат-мест
  const roomsOption = {
    1: ['1'],
    2: ['1', '2'],
    3: ['1', '2', '3'],
    100: ['0']
  };
  // проверка валидности полей комнат - мест
  function validateRoomsAndCapacity() {
    if (roomsOption[roomsField.value] === 100 && capacityField.value === '0') {
      return true;
    }
    else if (roomsOption[roomsField.value].includes(capacityField.value)) {
      return true;
    }
    return false;
  }

  pristine.addValidator(roomsField, validateRoomsAndCapacity, 'Не корректные данные');
  pristine.addValidator(capacityField, validateRoomsAndCapacity, 'Не корректные данные');

  // событие, по которому происходит проверка формы
  advertForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export { validate };
