let main = document.querySelector('.main');
let popup = document.querySelector('.popup');
let redact = document.querySelector('.profile__redact')
let closePopup = document.querySelector('.popup__close-img')
let popupMesto = document.querySelector('.popup-mesto')
let closeButtonMesto = document.querySelector('.popup-mesto__close-img')
const popupTitle = document.querySelector('.popup__title')
const popupContainer = document.querySelector('.popup__container')
const popupImageTitle = document.querySelector('.popup-img__title')
const popupImg = document.querySelector('.popup-img')
const nameInput = document.querySelector('.popup__input_first');
const aboutInput = document.querySelector('.popup__input_second');
const saveButton = document.querySelector('.popup__save-button')
const saveButtonMesto = document.querySelector('.popup-mesto__save-button')
const profileName = document.querySelector('.profile__title')
const profileAbout = document.querySelector('.profile__subtitle')
const popupImgImage = document.querySelector('.popup-img__image')
const popupImage = document.querySelector('.popup-img')
const elements = document.querySelector('.elements')
const element = elements.querySelector('.elements__element')
const cons = document.querySelector('.elements__content')
let plus = document.querySelector('.profile__edit-button')
let form = document.querySelector('.popup__form')




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

function popupOpen(popup) {
  popup.classList.add('popup_opened');
};

function popupClose() {
  popup.classList.remove('popup_opened');
};

function popupMestoClose() {
  popupMesto.classList.remove('popup-mesto_opened');
};

function popupChange() {
  popupMesto.classList.add('popup-mesto_opened');
};

function popupMestoClose() {
  popupMesto.classList.remove('popup-mesto_opened');
};

function addElement(elementName, elementLink) {
  const elementTemplate = document.querySelector('#element-template').content;
  const elementElement = elementTemplate.querySelector('.elements__element').cloneNode(true);
  let hearts = document.getElementsByClassName("elements__heart-icon");
  const elementImg = document.querySelector('.elements__img');

  elementElement.querySelector('.elements__title').textContent = elementName;
  elementElement.querySelector('.elements__img').src = elementLink;
  elements.prepend(elementElement);

  for (let heart of hearts) {
    heart.addEventListener("click", () => heart.classList.toggle('elements__heart-icon_active'));
  };

  elementImg.addEventListener('click', () => { openPopupImage(elementLink, elementName)
  });
};


function editProfileInfo() {
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  popupClose();
};

function openPopupImage(imgLink, imgTitle) {
  popupImg.classList.add('popup-img_opened')
  popupImgImage.setAttribute('src', imgLink);
  popupImageTitle.textContent = imgTitle;

  popupOpen(popupImage);
};


function addNewElement() {
  const newName = document.querySelector('.popup-mesto__input_first');
  const newLink = document.querySelector('.popup-mesto__input_second');

  addElement(newName.value, newLink.value);

  newName.value = '';
  newLink.value = '';

  popupMestoClose();
}



saveButtonMesto.addEventListener('click', addNewElement)


closePopup.addEventListener('click', popupClose);

redact.addEventListener('click', popupOpen);

plus.addEventListener('click', popupChange);

closeButtonMesto.addEventListener('click', popupMestoClose);



saveButton.addEventListener('click', editProfileInfo);

initialCards.forEach(item => addElement(item.name, item.link));
