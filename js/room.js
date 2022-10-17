

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

// сообщение ошибки поля количества комнат
function getRoomsErrorMessage() {
  const room = roomsField.value;
  const guest = guestsField.value;

  if (room === '100' && guest !== '0') {
    return 'Не для гостей';
  }
  if (room === '1' && guest !== '1') {
    return 'Для 1 гостя';
  }
  if (room === '2' && (guest !== '1' || guest !== '2')) {
    return 'для 1 или 2 гостей';
  }
  if (room === '3' && guest === '0') {
    return 'для 1, 2 или 3 гостей';
  }
}

// сообщение ошибки поля количества гостей
function getCapacityErrorMessage() {
  if (roomsField.value === '100') {
    return 'Не для гостей';
  } else if (guestsField.value === '0') {
    return 'Необходимо 100 комнат';
  }
  return `Необходимо минимум ${guestsField.value} комнаты.`;
}

export { guestsField, roomsField, validateRoomsAndCapacity, getRoomsErrorMessage, getCapacityErrorMessage };
