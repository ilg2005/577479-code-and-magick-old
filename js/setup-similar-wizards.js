'use strict';
(function () {

  window.data.createWizard();

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
      fragment.appendChild(renderWizard(window.data.createWizard()));
    }
    container.appendChild(fragment);
  };

  renderSimilarWizards(document.querySelector('.setup-similar-list'));
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
