let formElement = document.querySelector('.profile__description');
let elements = document.querySelector('.elements');
let nameInput = formElement.querySelector('.profile__title');
let jobInput = formElement.querySelector('.profile__profession');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__input_type_title');
let popupProfession = document.querySelector('.popup__input_type_profession');
let popup = document.querySelector('.popup');
let popupAddCard = document.querySelector('.popupAddCard');
let popupLinkAddCard = document.querySelector('.popupAddCard__input_type_link');
let popupNameAddCard = document.querySelector('.popupAddCard__input_type_name');
let closePopupAddCard = document.querySelector('.popupAddCard__close');
let form = document.querySelector('.popup__container');
let formSubmitAddCard = document.querySelector('.popupAddCard__container');
let addPictureButton = document.querySelector('.profile__add-button');
let itemTemplate = document.querySelector('.card-template').content;
let popupImage = document.querySelector('.popupImage');
let closeImage = document.querySelector('.popupImage__close');

const initialCards = [
  {
    name: 'Азовское море',
    link: './images/azov.jpg'
  },
  {
    name: 'Казань',
    link: './images/kazan.jpg'
  },
  {
    name: 'Сочи',
    link: './images/sochi.jpg'
  },
  {
    name: 'Волгоград',
    link: './images/volgograd.jpg'
  },
  {
    name: 'Лаго-Наки',
    link: './images/lagonaki.jpg'
  },
  {
    name: 'Нижний Новгород',
    link: './images/nn.jpg'
  }
];

function popupOpen() {
  popupName.value = nameInput.textContent;
  popupProfession.value = jobInput.textContent;
  popup.classList.add('popup_open');
}

function popupAddOpen() {
  popupAddCard.classList.add('popupAddCard_open');
}

function popupClose() {
  popup.classList.remove('popup_open');
}

function popupAddCardClose() {
  popupAddCard.classList.remove('popupAddCard_open');
}

function trashListener(element) {
  element.querySelector('.elements__delete').addEventListener('click', deleteCard);
}

function deleteCard(event) {
  event.target.closest('.elements__element').remove();
}

function likeListener(element) {
  element.querySelector('.elements__like').addEventListener('click', likeElement);
}

function likeElement(event) {
  event.target.classList.toggle('elements__like_active');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput.textContent = popupName.value;
  jobInput.textContent = popupProfession.value;
  popupClose();
}

function formSubmitAddCardHandler(evt) {
  evt.preventDefault();
  const cardElement = itemTemplate.cloneNode(true);
  cardElement.querySelector('.elements__image').src = popupLinkAddCard.value;
  cardElement.querySelector('.elements__mesto').textContent = popupNameAddCard.value;
  trashListener(cardElement);
  likeListener(cardElement);
  openImageListener(cardElement);
  elements.prepend(cardElement);
  popupAddCardClose();
}

function openImageListener(element) {
  element.querySelector('.elements__image').addEventListener('click', viewImage);
}

function viewImage(element) {
  popupImage.classList.add('popupImage_open');
  popupImage.querySelector('.popupImage__image').src = element.target.src;
  popupImage.querySelector('.popupImage__text').textContent = element.target.nextElementSibling.querySelector('.elements__mesto').textContent;
}

function popupImageClose() {
  popupImage.classList.remove('popupImage_open');
}

initialCards.forEach(function (element) {
  const cardElement = itemTemplate.cloneNode(true);
  cardElement.querySelector('.elements__image').src = element.link;
  cardElement.querySelector('.elements__mesto').textContent = element.name;
  trashListener(cardElement);
  likeListener(cardElement);
  openImageListener(cardElement);
  elements.append(cardElement);
})

formSubmitAddCard.addEventListener('submit', formSubmitAddCardHandler);
form.addEventListener('submit', formSubmitHandler);
editProfileButton.addEventListener('click', popupOpen);
closePopupButton.addEventListener('click', popupClose);
addPictureButton.addEventListener('click', popupAddOpen);
closePopupAddCard.addEventListener('click', popupAddCardClose);
closeImage.addEventListener('click', popupImageClose);