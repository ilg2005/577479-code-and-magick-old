'use strict';

(function () {
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_HEIGHT = 270;
  var CLOUD_WIDTH = 420;
  var BAR_MAX_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_SPACE = 50;
  var SPACE = 10;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderCloudText = function (ctx, msg, x, y, align) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.textAlign = align;
    ctx.fillText(msg, x, y);
  };

  var renderStatsColumn = function (ctx, i, players, times) {
    var maxTime = Math.max.apply(null, times);
    var barHeight = BAR_MAX_HEIGHT * times[i] / maxTime;
    ctx.fillRect(CLOUD_X + BAR_SPACE + (BAR_WIDTH + BAR_SPACE) * i, CLOUD_HEIGHT - 3 * SPACE - barHeight, BAR_WIDTH, barHeight);

    renderCloudText(ctx, players[i], CLOUD_X + BAR_SPACE + (BAR_WIDTH + BAR_SPACE) * i, CLOUD_HEIGHT - SPACE);
    renderCloudText(ctx, Math.round(times[i]), CLOUD_X + BAR_SPACE + (BAR_WIDTH + BAR_SPACE) * i, CLOUD_HEIGHT - barHeight - 4 * SPACE);
  };

  var renderStatsColumns = function (ctx, players, times) {
    for (var i = 0; i < players.length; i++) {
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
      }
      renderStatsColumn(ctx, i, players, times);
    }
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + SPACE, CLOUD_Y + SPACE, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255, 255, 255, 1)');

    renderCloudText(ctx, 'Ура вы победили!', CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + 2 * SPACE, 'center');
    renderCloudText(ctx, 'Список результатов:', CLOUD_X + SPACE, CLOUD_Y + 4 * SPACE, 'left');
    renderStatsColumns(ctx, players, times);
  };
})();
