'use strict';

var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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

var fragment = document.createDocumentFragment();

var renderSimilarWizards = function (array) {
  fragment.appendChild(renderWizard(array));
};

for (var i = 0; i < 4; i++) {
  renderSimilarWizards(createWizard());
}

var similarListElement = document.querySelector('.setup-similar-list');
similarListElement.appendChild(fragment);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
