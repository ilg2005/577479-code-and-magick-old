'use strict';

var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

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

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

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
  } else if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
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

setup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
});

renderSimilarWizards(document.querySelector('.setup-similar-list'));
document.querySelector('.setup-similar').classList.remove('hidden');
