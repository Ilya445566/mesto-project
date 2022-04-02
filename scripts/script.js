const main = document.querySelector('.main');
const popupEdit = document.querySelector('.popup-edit');
const redact = document.querySelector('.profile__redact')
const closeIcon = document.querySelector('.popup__close-img')
const popupMesto = document.querySelector('.popup-mesto')
const closeButtonMesto = document.querySelector('.popup-mesto__close-img')
const popupTitle = document.querySelector('.popup__title')
const popupContainer = document.querySelector('.popup__container')
const popupImageTitle = document.querySelector('.popup-img__title')
const popupImg = document.querySelector('.popup-img')
const nameInput = document.querySelector('.popup__input_first');
const aboutInput = document.querySelector('.popup__input_second');
const saveButton = document.querySelector('.popup__save-button')
const closeButtonImg = document.querySelector('.popup-img__close-img')
const saveButtonMesto = document.querySelector('.popup-mesto__save-button')
const profileName = document.querySelector('.profile__title')
const profileAbout = document.querySelector('.profile__subtitle')
const popupImgImage = document.querySelector('.popup-img__image')
const popupImage = document.querySelector('.popup-img')
const elements = document.querySelector('.elements')
const cons = document.querySelector('.elements__content')
const plus = document.querySelector('.profile__edit-button')
const form = document.querySelector('.popup__form')
const mestoForm = document.querySelector('.popup-mesto__form')



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


let hearts = document.getElementsByClassName("elements__heart-icon");
for (let heart of hearts) {
  heart.addEventListener("click", () => heart.classList.toggle('elements__heart-icon_active'));
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function addElement(elementName, elementLink) {
  const elementTemplate = document.querySelector('#element-template').content;
  const elementElement = elementTemplate.querySelector('.elements__element').cloneNode(true);
  const hearts = elementElement.getElementsByClassName("elements__heart-icon");
  const elementImg = elementElement.querySelector('.elements__img');

  elementElement.querySelector('.elements__title').textContent = elementName;
  elementElement.querySelector('.elements__img').src = elementLink;
  elements.prepend(elementElement);

  for (let heart of hearts) {
    heart.addEventListener("click", () => heart.classList.toggle('elements__heart-icon_active'));
  };

  elementImg.addEventListener('click', () => {
    openPopupImage(elementLink, elementName)
  });

  elementElement.querySelector('.elements__korzina').addEventListener('click', function (evt) {
    evt.target.closest('.elements__element').remove();
  })

};


function editProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closePopup(popupEdit);
};

function openPopupImage(imgLink, imgTitle) {
  openPopup(popupImg);
  popupImgImage.setAttribute('src', imgLink);
  popupImageTitle.textContent = imgTitle;
};


function addNewElement(evt) {
  evt.preventDefault();
  const newName = document.querySelector('.popup-mesto__input_first');
  const newLink = document.querySelector('.popup-mesto__input_second');

  addElement(newName.value, newLink.value);

  newName.value = '';
  newLink.value = '';

  closePopup(popupMesto);
}



saveButtonMesto.addEventListener('click', addNewElement);

mestoForm.addEventListener('submit', addNewElement);

form.addEventListener('submit', editProfileInfo);

redact.addEventListener('click', () => {openPopup(popupEdit)});

closeIcon.addEventListener('click', () => {closePopup(popupEdit)});

plus.addEventListener('click', () => {openPopup(popupMesto)});

closeButtonMesto.addEventListener('click', () => {closePopup(popupMesto)});

closeButtonImg.addEventListener('click', () => {closePopup(popupImg)});

saveButton.addEventListener('click', editProfileInfo);

initialCards.forEach(item => addElement(item.name, item.link));