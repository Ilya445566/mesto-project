const main = document.querySelector('.main');
const popupEdit = document.querySelector('.popup-edit');
const redact = document.querySelector('.profile__redact')
const profileCloseBtn = document.querySelector('.popup__close-img')
const popupMesto = document.querySelector('.popup-mesto')
const mestoBtnclose = document.querySelector('.popup-mesto__close-img')
const popupTitle = document.querySelector('.popup__title')
const popupContainer = document.querySelector('.popup__container')
const popupImageTitle = document.querySelector('.popup-img__title')
const popupImg = document.querySelector('.popup-img')
const nameInput = document.querySelector('.popup__input_name');
const aboutInput = document.querySelector('.popup__input_description');
const imgButtonclose = document.querySelector('.popup-img__close-img')
const profileName = document.querySelector('.profile__title')
const profileAbout = document.querySelector('.profile__subtitle')
const popupImgImage = document.querySelector('.popup-img__image')
const popupImage = document.querySelector('.popup-img')
const elements = document.querySelector('.elements')
const buttonEdit = document.querySelector('.profile__edit-button')
const formEdit = document.querySelector('.popup__form')
const mestoForm = document.querySelector('.popup-mesto__form')
const elementTemplate = document.querySelector('#element-template').content;
const newName = document.querySelector('.popup-mesto__input_name');
const newLink = document.querySelector('.popup-mesto__input_description');
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



function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
 

};

function addElement(elementName, elementLink) {

  const elementElement = elementTemplate.querySelector('.elements__element').cloneNode(true);
  const elementImg = elementElement.querySelector('.elements__img');
  
  elementElement.querySelector('.elements__title').textContent = elementName;
  elementElement.querySelector('.elements__img').src = elementLink;
  elementElement.querySelector('.elements__img').alt = elementName;
  elementElement.querySelector(".elements__heart-icon").addEventListener("click", activateElement);

  function activateElement(evt) {
    evt.target.classList.toggle("elements__heart-icon_active");
  };
  elementImg.addEventListener('click', () => {
    openPopupImage(elementLink, elementName)
  });
  elementElement.querySelector('.elements__korzina').addEventListener('click', function (evt) {
    evt.target.closest('.elements__element').remove();

  });
 return elementElement
};
function renderCard(elementName, elementLink) {
  const initializatedCards = addElement(elementName, elementLink);
  elements.prepend(initializatedCards);
};

initialCards.forEach(function (card) {
  renderCard(card.name, card.link);
});
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

function createCard(evt) {
  evt.preventDefault();
  renderCard(newName.value, newLink.value);

  
mestoForm.reset();
  closePopup(popupMesto);
}

mestoForm.addEventListener('submit', createCard);
formEdit.addEventListener('submit', editProfileInfo);
redact.addEventListener('click', () => {openPopup(popupEdit)});
profileCloseBtn.addEventListener('click', () => {closePopup(popupEdit)});
buttonEdit.addEventListener('click', () => {openPopup(popupMesto)});
mestoBtnclose.addEventListener('click', () => {closePopup(popupMesto)});
imgButtonclose.addEventListener('click', () => {closePopup(popupImg)});
