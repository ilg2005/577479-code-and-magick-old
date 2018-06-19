'use strict';

var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var wizardCoatColor = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyesColor = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireballColor = setup.querySelector('.setup-fireball-wrap');

var getRandomFeature = function (features) {
  return features[Math.round(Math.random() * (features.length - 1))];
};

var createWizard = function () {
  return {
    name: getRandomFeature(WIZARDS_FIRST_NAMES) + ' ' + getRandomFeature(WIZARDS_LAST_NAMES),
    coatColor: getRandomFeature(WIZARDS_COATS_COLORS),
    eyesColor: getRandomFeature(WIZARDS_EYES_COLORS)
  };
};

var renderWizard = function (wizard) {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarWizard = wizardTemplate.cloneNode(true);

  similarWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  similarWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  similarWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return similarWizard;
};

var renderSimilarWizards = function (container) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(createWizard()));
  }
  container.appendChild(fragment);
};

var openPopup = function () {
  setup.classList.remove('hidden');
};

var closePopup = function () {
  setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target.className !== 'setup-user-name' || evt.target.className === 'setup-open') {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var changeFeature = function (featureName, features, element) {
  var randomValue = getRandomFeature(features);
  if (featureName === 'fireball-color') {
    element.style.backgroundColor = randomValue;
  } else {
    element.style.fill = randomValue;
  }

  var selectorString = 'input' + '\[name=\"' + featureName + '\"\]';
  document.querySelector(selectorString).value = randomValue;
};

wizardCoatColor.addEventListener('click', function () {
  changeFeature('coat-color', WIZARDS_COATS_COLORS, wizardCoatColor);
});
wizardEyesColor.addEventListener('click', function () {
  changeFeature('eyes-color', WIZARDS_EYES_COLORS, wizardEyesColor);
});
wizardFireballColor.addEventListener('click', function () {
  changeFeature('fireball-color', WIZARDS_FIREBALL_COLORS, wizardFireballColor);
});

renderSimilarWizards(document.querySelector('.setup-similar-list'));
document.querySelector('.setup-similar').classList.remove('hidden');
