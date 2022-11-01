
// добавление проверки полей "Количество комнат" и "Количество мест"
const roomsFieldElement = document.querySelector('[name="rooms"]');
const guestsFieldElement = document.querySelector('[name="capacity"]');

// таблица для создания логики проверки комнат-мест
const roomsOption = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

// проверка валидности полей комнат - мест
function validateRoomsAndCapacity() {
  if (roomsOption[roomsFieldElement.value] === 100 && guestsFieldElement.value === '0') {
    return true;
  }
  else if (roomsOption[roomsFieldElement.value].includes(guestsFieldElement.value)) {
    return true;
  }
  return false;
}

// сообщение ошибки поля количества комнат
function getRoomsErrorMessage() {
  const room = roomsFieldElement.value;
  const guest = guestsFieldElement.value;

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
  if (roomsFieldElement.value === '100') {
    return 'Не для гостей';
  } else if (guestsFieldElement.value === '0') {
    return 'Необходимо 100 комнат';
  }
  return `Необходимо минимум ${guestsFieldElement.value} комнаты.`;
}

export { guestsFieldElement, roomsFieldElement, validateRoomsAndCapacity, getRoomsErrorMessage, getCapacityErrorMessage };
