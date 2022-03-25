let main = document.querySelector('.main');
let popup = document.querySelector('.popup');
let redact = document.querySelector('.profile__redact')
let closePopup = document.querySelector('.popup__close-img')
let popupMesto = document.querySelector('.popup-mesto') 
let closeButtonMesto = document.querySelector('.popup-mesto__close-img')
let popupTitle = document.querySelector('.popup__title')
let popupContainer = document.querySelector('.popup__container')

const saveButton = document.querySelector('.popup__save-button')
const saveButtonMesto = document.querySelector('.popup-mesto__save-button')
let elements = document.querySelector('.elements')
let element = elements.querySelector('.elements__element')
let content = element.querySelector('.elements__content')
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

function popupOpen() {
    popup.classList.add('popup_opened');
    popupTitle.textContent = 'Редактировать профиль';
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
}

function addElement(elementName, elementLink) {
  const elementTemplate = document.querySelector('#element-template').content;
  const elementElement = elementTemplate.querySelector('.elements__element').cloneNode(true);

  elementElement.querySelector('.elements__title').textContent = elementName;
  elementElement.querySelector('.elements__img').src = elementLink;
  elements.prepend(elementElement);
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

initialCards.forEach(item => elements.prepend(addElement(item.name, item.link)));
