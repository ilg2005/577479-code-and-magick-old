'use strict';
(function () {
  var WIZARDS_NUMBER = 4;

  var onSuccessLoad = function (wizards) {

    var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      var randomWizard = window.util.getRandomFeature(wizards);

      var similarWizard = wizardTemplate.cloneNode(true);
      similarWizard.querySelector('.setup-similar-label').textContent = randomWizard.name;
      similarWizard.querySelector('.wizard-eyes').style.fill = randomWizard.colorEyes;
      similarWizard.querySelector('.wizard-coat').style.fill = randomWizard.colorCoat;

      fragment.appendChild(similarWizard);
    }
    document.querySelector('.setup-similar-list').appendChild(fragment);
  };

  var onErrorLoad = function (message) {
    alert(message);
  };

  window.backend.load(onSuccessLoad, onErrorLoad);
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
