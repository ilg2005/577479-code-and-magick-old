'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

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
    }
  };
})();
