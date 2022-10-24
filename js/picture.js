const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarPhotoPick = document.querySelector('.ad-form__field input[type=file]');
const avatarPhotoPreview = document.querySelector('#avatar-img');
const adPhotoPick = document.querySelector('.ad-form__upload input[type=file]');
const adPhotoPreview = document.querySelector('.ad-form__photo');

const addPhoto = (photoUpload, preview) => {
  const file = photoUpload.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

const pictureReset = () => {
  avatarPhotoPreview.style.padding = avatarPhotoPick.style.padding;
  avatarPhotoPreview.src = 'img/muffin-grey.svg';
  adPhotoPreview.innerHTML = '';
};

avatarPhotoPick.addEventListener('change', () => {
  addPhoto(avatarPhotoPick, avatarPhotoPreview);
});

adPhotoPick.addEventListener('change', () => {
  const photoPreview = document.createElement('img');
  photoPreview.style.maxHeight = '100%';
  addPhoto(adPhotoPick, photoPreview);
  adPhotoPreview.appendChild(photoPreview);
});

export { pictureReset };
