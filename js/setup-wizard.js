'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');
  var wizardCoatColor = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesColor = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballColor = setup.querySelector('.setup-fireball-wrap');

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
    var randomValue = window.util.getRandomFeature(features);
    if (featureName === 'fireball-color') {
      element.style.backgroundColor = randomValue;
    } else {
      element.style.fill = randomValue;
    }

    var selectorString = 'input' + '\[name=\"' + featureName + '\"\]';
    document.querySelector(selectorString).value = randomValue;
  };

  wizardCoatColor.addEventListener('click', function () {
    changeFeature('coat-color', window.constants.COATS_COLORS, wizardCoatColor);
  });
  wizardEyesColor.addEventListener('click', function () {
    changeFeature('eyes-color', window.constants.EYES_COLORS, wizardEyesColor);
  });
  wizardFireballColor.addEventListener('click', function () {
    changeFeature('fireball-color', window.constants.FIREBALL_COLORS, wizardFireballColor);
  });
})();
