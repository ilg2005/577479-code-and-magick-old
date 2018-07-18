'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var serverResponseMessage = function (message, backgroundColor) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; width: 300px; min-height: 25px; margin: auto; padding: 25px; text-align: center; border-radius: 50px; background-color: ' + backgroundColor;
    node.style.position = 'fixed';
    node.style.top = '50%';
    node.style.bottom = '50%';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '18px';
    node.style.visibility = 'visible';

    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);

    /* var hideNode = function (element) {
      element.style.visibility = 'hidden';
    };
    setTimeout(hideNode(node), 5000);*/
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
    serverResponseMessage: serverResponseMessage
  };
})();
