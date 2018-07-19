'use strict';

(function () {
  var form = document.querySelector('form');
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var dialogHandle = setup.querySelector('.setup-user-pic');
  var initialSetupCoordinates = {
    left: setup.style.left,
    top: setup.style.top
  };

  var openPopup = function () {
    setup.style.left = initialSetupCoordinates.left;
    setup.style.top = initialSetupCoordinates.top;
    setup.classList.remove('hidden');
  };

  var closePopup = function () {
    setup.classList.add('hidden');
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.target.className !== 'setup-user-name') {
      window.util.isEscEvent(evt, closePopup);
    }
  });

  var onDialogHandleMousedown = function (evtDown) {
    evtDown.preventDefault();
    var startMouseCoordinates = {
      x: evtDown.clientX,
      y: evtDown.clientY
    };

    var dragged = false;

    var onDocumentMousemove = function (evtMove) {
      dragged = true;
      var shift = {
        x: evtMove.clientX - startMouseCoordinates.x,
        y: evtMove.clientY - startMouseCoordinates.y
      };

      startMouseCoordinates = {
        x: evtMove.clientX,
        y: evtMove.clientY
      };

      setup.style.left = (setup.offsetLeft + shift.x) + 'px';
      setup.style.top = (setup.offsetTop + shift.y) + 'px';
    };

    var onDocumentMouseup = function (evtUp) {
      evtUp.preventDefault();

      document.removeEventListener('mousemove', onDocumentMousemove);
      document.removeEventListener('mouseup', onDocumentMouseup);

      if (dragged === false) {
        document.querySelector('.upload input').click();
      }
    };

    document.addEventListener('mousemove', onDocumentMousemove);
    document.addEventListener('mouseup', onDocumentMouseup);
  };

  dialogHandle.addEventListener('mousedown', onDialogHandleMousedown);

  var onSuccessSave = function () {
    closePopup();
    window.util.renderSuccessMessage('Сохранено успешно!');
  };

  var onErrorSave = function (message) {
    window.util.renderServerResponseMessage(message, 'error');
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), onSuccessSave, onErrorSave);
  });
})();
