'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magic';
  var SERVER_RESPONSE_OK = 200;

  var request = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === SERVER_RESPONSE_OK) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;
  };

  window.backend = {
    load: function (onLoad, onError) {
      request(onLoad, onError);
      xhr.open('GET', URL + '\/data');
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      request(onLoad, onError);
      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
