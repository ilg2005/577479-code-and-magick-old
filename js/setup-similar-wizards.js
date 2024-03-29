'use strict';
(function () {
  var WIZARDS_NUMBER = 4;

  var renderSimilarWizards = function (wizards) {
    var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      var randomWizard = window.util.getUniqueRandomItem(wizards);

      var similarWizard = wizardTemplate.cloneNode(true);
      similarWizard.querySelector('.setup-similar-label').textContent = randomWizard.name;
      similarWizard.querySelector('.wizard-eyes').style.fill = randomWizard.colorEyes;
      similarWizard.querySelector('.wizard-coat').style.fill = randomWizard.colorCoat;

      fragment.appendChild(similarWizard);
    }
    document.querySelector('.setup-similar-list').appendChild(fragment);
  };

  var onSuccessLoad = function (loadedData) {
    renderSimilarWizards(loadedData);
  };

  var onErrorLoad = function (message) {
    window.util.renderErrorMessage(message);
  };

  window.backend.load(onSuccessLoad, onErrorLoad);
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
