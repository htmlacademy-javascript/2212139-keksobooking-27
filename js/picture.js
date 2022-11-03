const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarPhotoPickElement = document.querySelector('.ad-form__field input[type=file]');
const avatarPhotoPreviewElement = document.querySelector('#avatar-img');
const adPhotoPickElement = document.querySelector('.ad-form__upload input[type=file]');
const adPhotoPreviewElement = document.querySelector('.ad-form__photo');

const addPhoto = (photoUpload, preview) => {
  const file = photoUpload.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

const pictureReset = () => {
  avatarPhotoPreviewElement.style.padding = avatarPhotoPickElement.style.padding;
  avatarPhotoPreviewElement.src = 'img/muffin-grey.svg';
  adPhotoPreviewElement.innerHTML = '';
};

avatarPhotoPickElement.addEventListener('change', () => {
  addPhoto(avatarPhotoPickElement, avatarPhotoPreviewElement);
});

adPhotoPickElement.addEventListener('change', () => {
  const photoPreview = document.createElement('img');
  photoPreview.style.maxHeight = '100%';
  addPhoto(adPhotoPickElement, photoPreview);
  adPhotoPreviewElement.appendChild(photoPreview);
});

export { pictureReset };
