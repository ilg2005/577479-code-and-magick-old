'use strict';
(function () {
  var COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
    var randomValue = window.util.getUniqueRandomItem(features);
    if (featureName === 'fireball-color') {
      element.style.backgroundColor = randomValue;
    } else {
      element.style.fill = randomValue;
    }

    var selectorString = 'input' + '\[name=\"' + featureName + '\"\]';
    document.querySelector(selectorString).value = randomValue;
  };

  wizardCoatColor.addEventListener('click', function () {
    changeFeature('coat-color', COATS_COLORS, wizardCoatColor);
  });
  wizardEyesColor.addEventListener('click', function () {
    changeFeature('eyes-color', EYES_COLORS, wizardEyesColor);
  });
  wizardFireballColor.addEventListener('click', function () {
    changeFeature('fireball-color', FIREBALL_COLORS, wizardFireballColor);
  });
})();
