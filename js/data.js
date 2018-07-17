'use strict';

(function () {
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var onSuccessLoad = function (response) {
    alert('Данные загружены успешно!');
    console.log(response);
  };

  var onErrorLoad = function (message) {
    alert(message);
  };

  window.backend.load(onSuccessLoad, onErrorLoad);

  window.data = {
    COATS_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    createWizard: function () {
      return {
        name: window.util.getRandomFeature(FIRST_NAMES) + ' ' + window.util.getRandomFeature(LAST_NAMES),
        coatColor: window.util.getRandomFeature(window.data.COATS_COLORS),
        eyesColor: window.util.getRandomFeature(window.data.EYES_COLORS)
      };
    }
  };

})();
