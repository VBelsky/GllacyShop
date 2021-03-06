

var link = document.querySelector('.contact-info-button');
var modal = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.feedback-form-overlay');
var close = modal.querySelector('.close-modal');
var user = modal.querySelector('[name=name]');
var email = modal.querySelector('[name=email]');
var message = modal.querySelector('[name=message]');
var form = modal.querySelector('form');

var isStorageSupport = true;
var userStorage = '';
var emailStorage = '';


try {
  userStorage = localStorage.getItem('user');
  emailStorage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-feedback-show');
  overlay.classList.add('feedback-form-overlay-show');
  if (userStorage && emailStorage) {
    user.value = userStorage;
    email.value = emailStorage;
    message.focus();
  } else {
    user.focus();
  }
});


close.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-feedback-show');
  overlay.classList.remove('feedback-form-overlay-show');
  form.classList.remove('modal-feedback-error');
});


overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-feedback-show');
  overlay.classList.remove('feedback-form-overlay-show');
  form.classList.remove('modal-feedback-error');
});


form.addEventListener('submit', function (evt) {
  if (!user.value || !email.value) {
    evt.preventDefault();
    form.classList.remove('modal-feedback-error');
    form.offsetWidth = form.offsetWidth;
    form.classList.add('modal-feedback-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('user', user.value);
      localStorage.setItem('email', email.value);
    }
  }
});


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (modal.classList.contains('modal-feedback-show')) {
      modal.classList.remove('modal-feedback-show');
      overlay.classList.remove('feedback-form-overlay-show');
      form.classList.remove('modal-feedback-error');
    }
  }
});
