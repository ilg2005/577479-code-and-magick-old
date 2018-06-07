'use strict';

var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomFeature = function (array) {
  return array[Math.round(Math.random() * (array.length - 1))];
};

var createWizard = function () {
  return {
    name: getRandomFeature(WIZARDS_FIRST_NAMES) + ' ' + getRandomFeature(WIZARDS_LAST_NAMES),
    coatColor: getRandomFeature(WIZARDS_COATS_COLORS),
    eyesColor: getRandomFeature(WIZARDS_EYES_COLORS)
  };
};

var createSimilarWizards = function () {
  var similarWizards = [];
  for (var i = 0; i < 4; i++) {
    similarWizards.push(createWizard());
  }
  return similarWizards;
};

var similarWizards = createSimilarWizards();

var renderSimilarWizards = function () {
  var template = document.querySelector('#similar-wizard-template');
  var documentFragment = template.content;
  var similarWizardTemplate = documentFragment.querySelector('.setup-similar-item');

  var similarListElement = document.querySelector('.setup-similar-list');

  for (var i = 0; i < 4; i++) {
    var similarWizard = similarWizardTemplate.cloneNode(true);

    similarWizard.querySelector('.setup-similar-label').textContent = similarWizards[i].name;
    similarWizard.querySelector('.wizard-coat').style.fill = similarWizards[i].coatColor;
    similarWizard.querySelector('.wizard-eyes').style.fill = similarWizards[i].eyesColor;
    similarListElement.appendChild(similarWizard);
  }
};

var showUserSetup = function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};

showUserSetup();

renderSimilarWizards();
