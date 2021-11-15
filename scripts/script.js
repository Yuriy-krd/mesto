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
let form = document.querySelector('.popup__container');
let addPictureButton = document.querySelector('.profile__add-button');
let itemTemplate = document.querySelector('.card-template').content;


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
  popupAddCard.classList.add('popup_open');
}

function popupClose() {
  popup.classList.remove('popup_open');
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

initialCards.forEach(function (element) {
  const cardElement = itemTemplate.cloneNode(true);
  cardElement.querySelector('.elements__image').src = element.link;
  cardElement.querySelector('.elements__mesto').textContent = element.name;
  trashListener(cardElement);
  likeListener(cardElement);
  elements.append(cardElement);  
})

form.addEventListener('submit', formSubmitHandler);
editProfileButton.addEventListener('click', popupOpen);
closePopupButton.addEventListener('click', popupClose);
addPictureButton.addEventListener('click', popupAddOpen);