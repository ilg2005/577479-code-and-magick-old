'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var renderSuccessMessage = function (message) {
    var MESSAGE_TIMEOUT = 1000;
    var node = document.createElement('div');
    node.style = 'z-index: 100; width: 300px; min-height: 50px; border-radius: 50px; margin: auto; text-align: center; background-color: green';
    node.style.display = 'inline-flex';
    node.style.justifyContent = 'center';
    node.style.alignItems = 'center';
    node.style.position = 'fixed';
    node.style.top = '50%';
    node.style.bottom = '50%';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '18px';

    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);

    setTimeout(function () {
      node.remove();
    }, MESSAGE_TIMEOUT);
  };

  var renderErrorMessage = function (message) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; width: 500px; min-height: 50px; margin: auto; text-align: center';
    node.style.fontSize = '20px';

    node.textContent = message;
    document.querySelector('.setup-submit').insertAdjacentElement('beforebegin', node);
  };

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getUniqueRandomItem: function (items) {
      var uniqueRandomItem = items[Math.round(Math.random() * (items.length - 1))];
      items.splice(items.indexOf(uniqueRandomItem), 1);
      return uniqueRandomItem;
    },
    renderSuccessMessage: renderSuccessMessage,
    renderErrorMessage: renderErrorMessage
  };
})();
