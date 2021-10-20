let formElement = document.querySelector('.profile__description');
let nameInput = formElement.querySelector('.profile__title');
let jobInput = formElement.querySelector('.profile__profession');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__input_title');
let popupProfession = document.querySelector('.popup__input_profession');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__container');

function popupOpen() {
  popupName.value = nameInput.textContent;
  popupProfession.value = jobInput.textContent;
  popup.classList.add('popup_open');
}

function popupClose() {
  popup.classList.remove('popup_open');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput.textContent = popupName.value;
  jobInput.textContent = popupProfession.value;
  popupClose();
}

form.addEventListener('submit', formSubmitHandler);
editProfileButton.addEventListener('click', popupOpen);
closePopupButton.addEventListener('click', popupClose);
